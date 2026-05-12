#!/usr/bin/env node
import { createRequire } from "node:module";
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, relative, resolve, sep } from "node:path";
import { spawn, spawnSync } from "node:child_process";

const repoRoot = resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const artifactRoot = resolve(process.env.ARTIFACT_DIR || join(repoRoot, "template-validation-artifacts"));
const playwrightRoot = process.env.PLAYWRIGHT_ROOT;

const TEMPLATE_ROOTS = ["templates", "tutorials", "layouts"];
// Maximum time to wait for each started dev or preview server to respond.
const SERVER_TIMEOUT_MS = Number(process.env.SERVER_TIMEOUT_MS || 120000);
// Maximum time Playwright will wait for initial page navigation.
const PAGE_TIMEOUT_MS = Number(process.env.PAGE_TIMEOUT_MS || 45000);
// Maximum time to wait for ArcGIS and Calcite custom elements to be registered.
const CUSTOM_ELEMENT_TIMEOUT_MS = Number(process.env.CUSTOM_ELEMENT_TIMEOUT_MS || 15000);
// First local port used for validation; each template gets an isolated port pair.
const START_PORT = Number(process.env.START_PORT || 4300);
const MAX_COMMAND_BUFFER_MB = 20;
const MAX_COMMAND_BUFFER_BYTES = 1024 * 1024 * MAX_COMMAND_BUFFER_MB;
const ARCGIS_OR_CALCITE_PATTERN = /^(arcgis|calcite)-/;
const VALIDATED_RESPONSE_PATTERN = /(arcgis|calcite|127\.0\.0\.1|localhost)/i;
const MAP_LIKE_SELECTOR = "arcgis-map, arcgis-scene, arcgis-map-components, arcgis-placement, #viewDiv, .viewDiv";

mkdirSync(artifactRoot, { recursive: true });

const summaries = [];
let hasFailure = false;

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || repoRoot,
    encoding: "utf8",
    shell: false,
    env: { ...process.env, ...(options.env || {}) },
    maxBuffer: MAX_COMMAND_BUFFER_BYTES,
  });
  return {
    command: [command, ...args].join(" "),
    status: result.status,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

function getChangedFiles() {
  const manualPaths = (process.env.TEMPLATE_PATHS || "")
    .split(/[\n,]/)
    .map((value) => value.trim())
    .filter(Boolean);

  if (manualPaths.length > 0) {
    return manualPaths;
  }

  const baseSha = process.env.BASE_SHA;
  const headSha = process.env.HEAD_SHA || "HEAD";
  if (!baseSha) {
    throw new Error("BASE_SHA is required when TEMPLATE_PATHS is not provided.");
  }

  const diff = run("git", ["diff", "--name-only", `${baseSha}..${headSha}`]);
  if (diff.status !== 0) {
    throw new Error(`Unable to determine changed files.\n${diff.stderr || diff.stdout}`);
  }
  return diff.stdout.split("\n").map((line) => line.trim()).filter(Boolean);
}

function findTemplateDir(changedFile) {
  const normalized = changedFile.replace(/\\/g, "/").replace(/^\.\//, "");
  const [root] = normalized.split("/");
  if (!TEMPLATE_ROOTS.includes(root)) return null;

  const absoluteFile = resolve(repoRoot, normalized);
  let current = normalized.endsWith("/") ? absoluteFile : resolve(absoluteFile, "..");
  while (current.startsWith(resolve(repoRoot, root))) {
    if (existsSync(join(current, "package.json"))) {
      return relative(repoRoot, current).split(sep).join("/");
    }
    const parent = resolve(current, "..");
    if (parent === current) break;
    current = parent;
  }
  return null;
}

function readPackage(templateDir) {
  return JSON.parse(readFileSync(join(repoRoot, templateDir, "package.json"), "utf8"));
}

function sanitizeName(value) {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "_");
}

function writeLog(dir, name, result) {
  writeFileSync(
    join(dir, `${name}.log`),
    `$ ${result.command}\n\n# exit ${result.status}\n\n## stdout\n${result.stdout}\n\n## stderr\n${result.stderr}\n`,
  );
}

function getInstallCommand(cwd) {
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) {
    return ["pnpm", ["install", "--frozen-lockfile"]];
  }
  if (existsSync(join(cwd, "yarn.lock"))) {
    return ["yarn", ["install", "--frozen-lockfile"]];
  }
  if (existsSync(join(cwd, "package-lock.json"))) {
    return ["npm", ["ci"]];
  }
  return ["npm", ["install"]];
}

function installDependencies(templateDir, templateArtifactDir) {
  const cwd = join(repoRoot, templateDir);
  const packageManager = getInstallCommand(cwd);

  const result = run(packageManager[0], packageManager[1], { cwd });
  writeLog(templateArtifactDir, "install", result);
  return result;
}

function runScript(templateDir, scriptName, extraArgs = []) {
  return run("npm", ["run", scriptName, ...extraArgs], { cwd: join(repoRoot, templateDir), env: { BROWSER: "none" } });
}

function startScript(templateDir, scriptName, port) {
  const args = ["run", scriptName];
  if (scriptName === "dev" || scriptName === "preview") {
    args.push("--", "--host", "127.0.0.1", "--port", String(port), "--strictPort");
  } else if (scriptName === "start") {
    args.push("--", "--host", "127.0.0.1", "--port", String(port));
  }

  const child = spawn("npm", args, {
    cwd: join(repoRoot, templateDir),
    shell: false,
    env: { ...process.env, BROWSER: "none", CI: "true" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let stdout = "";
  let stderr = "";
  child.stdout.on("data", (data) => { stdout += data.toString(); });
  child.stderr.on("data", (data) => { stderr += data.toString(); });

  return {
    command: ["npm", ...args].join(" "),
    child,
    getOutput: () => ({ stdout, stderr }),
    stop: async () => {
      if (child.exitCode !== null || child.signalCode !== null) return;
      child.kill("SIGTERM");
      await new Promise((resolveStop) => {
        const timer = setTimeout(() => {
          if (child.exitCode === null) child.kill("SIGKILL");
          resolveStop();
        }, 5000);
        child.once("exit", () => {
          clearTimeout(timer);
          resolveStop();
        });
      });
    },
  };
}

async function waitForServer(url, processHandle) {
  const deadline = Date.now() + SERVER_TIMEOUT_MS;
  let lastError = "";
  while (Date.now() < deadline) {
    if (processHandle?.child?.exitCode !== null) {
      const output = processHandle.getOutput();
      throw new Error(`Server exited before becoming ready.\n${output.stdout}\n${output.stderr}`);
    }
    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.status < 500) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error.message;
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 1000));
  }
  throw new Error(`Timed out waiting for ${url}: ${lastError}`);
}

function findBuiltIndex(templateDir) {
  const distRoot = join(repoRoot, templateDir, "dist");
  if (!existsSync(distRoot)) return null;

  const queue = [{ dir: distRoot, depth: 0 }];
  while (queue.length > 0) {
    const { dir, depth } = queue.shift();
    if (existsSync(join(dir, "index.html"))) return dir;
    if (depth >= 4) continue;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) queue.push({ dir: join(dir, entry.name), depth: depth + 1 });
    }
  }
  return null;
}

function contentType(filePath) {
  switch (extname(filePath)) {
    case ".html": return "text/html; charset=utf-8";
    case ".js": return "text/javascript; charset=utf-8";
    case ".mjs": return "text/javascript; charset=utf-8";
    case ".css": return "text/css; charset=utf-8";
    case ".json": return "application/json; charset=utf-8";
    case ".svg": return "image/svg+xml";
    case ".png": return "image/png";
    case ".jpg":
    case ".jpeg": return "image/jpeg";
    case ".wasm": return "application/wasm";
    default: return "application/octet-stream";
  }
}

async function startStaticPreview(templateDir, port) {
  const root = findBuiltIndex(templateDir);
  if (!root) return null;

  const server = createServer((request, response) => {
    const requestUrl = new URL(request.url || "/", `http://127.0.0.1:${port}`);
    const requestedPath = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, "");
    const requestedFile = join(root, requestedPath);
    const isInsideRoot = requestedFile === root || requestedFile.startsWith(`${root}${sep}`);
    if (!isInsideRoot) {
      response.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }
    const fileExists = existsSync(requestedFile);
    const isDirectoryRequest = fileExists && statSync(requestedFile).isDirectory();
    const shouldServeFile = fileExists && !isDirectoryRequest;
    const acceptsHtml = (request.headers.accept || "").includes("text/html");
    if (!shouldServeFile && !acceptsHtml) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    const file = shouldServeFile ? requestedFile : join(root, "index.html");
    try {
      response.writeHead(200, { "content-type": contentType(file) });
      response.end(readFileSync(file));
    } catch {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
    }
  });

  await new Promise((resolveListen, rejectListen) => {
    server.once("error", rejectListen);
    server.listen(port, "127.0.0.1", resolveListen);
  });

  return {
    command: `static preview ${root}`,
    stop: async () => new Promise((resolveClose) => server.close(resolveClose)),
    getOutput: () => ({ stdout: `Serving ${root}`, stderr: "" }),
  };
}

async function inspectApp(browser, url, artifactDir, label) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];
  const severeResponses = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.method()} ${request.url()} - ${request.failure()?.errorText || "failed"}`);
  });
  page.on("response", (response) => {
    const responseUrl = response.url();
    if (response.status() >= 400 && VALIDATED_RESPONSE_PATTERN.test(responseUrl)) {
      severeResponses.push(`${response.status()} ${responseUrl}`);
    }
  });

  let navigationError = null;
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: PAGE_TIMEOUT_MS });
  } catch (error) {
    navigationError = error.message;
  }

  await page.waitForTimeout(2000);
  await page.screenshot({ path: join(artifactDir, `${label}.png`), fullPage: true });

  const dom = await page.evaluate(async ({ customElementTimeoutMs, customElementPattern, mapLikeSelector }) => {
    const arcgisOrCalcitePattern = new RegExp(customElementPattern);
    const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
    const deadline = Date.now() + customElementTimeoutMs;
    const interestingTags = () => [...document.querySelectorAll("*")]
      .map((element) => element.localName)
      .filter((tag) => arcgisOrCalcitePattern.test(tag));

    while (Date.now() < deadline) {
      const tags = interestingTags();
      if (tags.length === 0 || tags.every((tag) => customElements.get(tag))) break;
      await sleep(500);
    }

    const tags = [...new Set(interestingTags())];
    const undefinedCustomElements = tags.filter((tag) => !customElements.get(tag));
    const mapLikeElements = [...document.querySelectorAll(mapLikeSelector)]
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const firstClass = element.classList?.length ? `.${element.classList.item(0)}` : "";
        return {
          selector: element.id ? `#${element.id}` : firstClass || element.localName,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          childCount: element.children.length,
        };
      });

    return {
      title: document.title,
      bodyTextLength: (document.body?.innerText || "").trim().length,
      bodyChildCount: document.body?.children.length || 0,
      arcgisOrCalciteTags: tags,
      undefinedCustomElements,
      mapLikeElements,
      // A map or component container with either zero dimension cannot render visibly.
      emptyMapLikeElements: mapLikeElements.filter((element) => element.width === 0 || element.height === 0),
    };
  }, {
    customElementTimeoutMs: CUSTOM_ELEMENT_TIMEOUT_MS,
    customElementPattern: ARCGIS_OR_CALCITE_PATTERN.source,
    mapLikeSelector: MAP_LIKE_SELECTOR,
  });

  await page.close();

  const issues = [];
  if (navigationError) issues.push(`Navigation failed: ${navigationError}`);
  if (dom.bodyChildCount === 0) issues.push("Document body has no elements.");
  if (dom.undefinedCustomElements.length > 0) issues.push(`Undefined ArcGIS/Calcite custom elements: ${dom.undefinedCustomElements.join(", ")}`);
  if (dom.emptyMapLikeElements.length > 0) issues.push(`Empty map/component containers: ${JSON.stringify(dom.emptyMapLikeElements)}`);
  if (pageErrors.length > 0) issues.push(`Page errors: ${pageErrors.join(" | ")}`);
  if (consoleErrors.length > 0) issues.push(`Console errors: ${consoleErrors.join(" | ")}`);
  if (failedRequests.length > 0) issues.push(`Failed requests: ${failedRequests.join(" | ")}`);
  if (severeResponses.length > 0) issues.push(`HTTP errors: ${severeResponses.join(" | ")}`);

  const inspection = { url, navigationError, consoleErrors, pageErrors, failedRequests, severeResponses, dom, issues };
  writeFileSync(join(artifactDir, `${label}.json`), JSON.stringify(inspection, null, 2));
  return inspection;
}

async function validateTemplate(browser, templateDir, index) {
  const packageJson = readPackage(templateDir);
  const scripts = packageJson.scripts || {};
  const templateArtifactDir = join(artifactRoot, sanitizeName(templateDir));
  mkdirSync(templateArtifactDir, { recursive: true });

  const summary = {
    templateDir,
    packageName: packageJson.name || templateDir,
    install: "not run",
    build: "not run",
    dev: "not run",
    preview: "not run",
    failed: false,
    issues: [],
  };

  if (!scripts.build && !scripts.dev && !scripts.start) {
    summary.issues.push("Skipped: package has no build, dev, or start script.");
    return summary;
  }

  const install = installDependencies(templateDir, templateArtifactDir);
  summary.install = install.status === 0 ? "passed" : "failed";
  if (install.status !== 0) {
    summary.failed = true;
    summary.issues.push("Dependency installation failed.");
    return summary;
  }

  if (scripts.build) {
    const build = runScript(templateDir, "build");
    writeLog(templateArtifactDir, "build", build);
    summary.build = build.status === 0 ? "passed" : "failed";
    if (build.status !== 0) {
      summary.failed = true;
      summary.issues.push("Build failed.");
    }
  }

  const devScript = scripts.dev ? "dev" : scripts.start ? "start" : null;
  if (devScript) {
    const port = START_PORT + index * 10;
    const server = startScript(templateDir, devScript, port);
    const url = `http://127.0.0.1:${port}/`;
    try {
      await waitForServer(url, server);
      const inspection = await inspectApp(browser, url, templateArtifactDir, "dev");
      summary.dev = inspection.issues.length === 0 ? "passed" : "failed";
      if (inspection.issues.length > 0) summary.failed = true;
      summary.issues.push(...inspection.issues.map((issue) => `Dev: ${issue}`));
    } catch (error) {
      summary.dev = "failed";
      summary.failed = true;
      summary.issues.push(`Dev server failed: ${error.message}`);
    } finally {
      const output = server.getOutput();
      writeFileSync(join(templateArtifactDir, "dev-server.log"), `$ ${server.command}\n\n## stdout\n${output.stdout}\n\n## stderr\n${output.stderr}\n`);
      await server.stop();
    }
  }

  if (scripts.preview || scripts.build) {
    const port = START_PORT + index * 10 + 1;
    let previewServer = null;
    try {
      previewServer = scripts.preview ? startScript(templateDir, "preview", port) : await startStaticPreview(templateDir, port);
      if (!previewServer) {
        summary.preview = "skipped";
      } else {
        const url = `http://127.0.0.1:${port}/`;
        await waitForServer(url, previewServer.child ? previewServer : null);
        const inspection = await inspectApp(browser, url, templateArtifactDir, "preview");
        summary.preview = inspection.issues.length === 0 ? "passed" : "failed";
        if (inspection.issues.length > 0) summary.failed = true;
        summary.issues.push(...inspection.issues.map((issue) => `Preview: ${issue}`));
      }
    } catch (error) {
      summary.preview = "failed";
      summary.failed = true;
      summary.issues.push(`Preview failed: ${error.message}`);
    } finally {
      if (previewServer) {
        const output = previewServer.getOutput();
        writeFileSync(join(templateArtifactDir, "preview-server.log"), `$ ${previewServer.command}\n\n## stdout\n${output.stdout}\n\n## stderr\n${output.stderr}\n`);
        await previewServer.stop();
      }
    }
  }

  return summary;
}

function writeReport(changedFiles, templateDirs) {
  const lines = ["# Template validation report", "", `Changed files considered: ${changedFiles.length}`, ""];
  if (templateDirs.length === 0) {
    lines.push("No touched app templates were detected.", "");
  }

  for (const summary of summaries) {
    lines.push(`## ${summary.templateDir}`, "");
    lines.push(`- Package: ${summary.packageName}`);
    lines.push(`- Install: ${summary.install}`);
    lines.push(`- Build: ${summary.build}`);
    lines.push(`- Dev server inspection: ${summary.dev}`);
    lines.push(`- Built preview inspection: ${summary.preview}`);
    if (summary.issues.length > 0) {
      lines.push("- Issues:");
      for (const issue of summary.issues) lines.push(`  - ${issue.replace(/\n/g, " ")}`);
    } else {
      lines.push("- Issues: none");
    }
    lines.push("");
  }

  const report = lines.join("\n");
  writeFileSync(join(artifactRoot, "validation-report.md"), report);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${report}\n`);
  }
  console.log(report);
}

async function main() {
  const changedFiles = getChangedFiles();
  const templateDirs = [...new Set(changedFiles.map(findTemplateDir).filter(Boolean))].sort();

  if (templateDirs.length === 0) {
    writeReport(changedFiles, templateDirs);
    return;
  }

  const requireFromPlaywrightRoot = playwrightRoot
    ? createRequire(join(playwrightRoot, "package.json"))
    : createRequire(import.meta.url);
  const { chromium } = requireFromPlaywrightRoot("playwright");
  const browser = await chromium.launch();
  try {
    for (const [index, templateDir] of templateDirs.entries()) {
      const summary = await validateTemplate(browser, templateDir, index);
      summaries.push(summary);
      if (summary.failed) hasFailure = true;
    }
  } finally {
    await browser.close();
  }

  writeReport(changedFiles, templateDirs);
  if (hasFailure) process.exit(1);
}

main().catch((error) => {
  writeFileSync(join(artifactRoot, "fatal-error.log"), `${error.stack || error.message}\n`);
  console.error(error);
  process.exit(1);
});
