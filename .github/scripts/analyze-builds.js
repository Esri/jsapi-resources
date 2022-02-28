#!/usr/bin/env node
const { resolve } = require("path");
const {
  createWriteStream,
  promises: { readdir, readFile }
} = require("fs");
const exec = require("util").promisify(require("child_process").exec);
const { getBuildSizes } = require("./build-size.js");

const SAMPLES_PATH = resolve(__dirname, "..", "..", "esm-samples");
const METRICS_PATH = resolve(SAMPLES_PATH, ".metrics");

const SAMPLES_INFO = {
  "jsapi-angular-cli": {
    name: "Angular",
    package: "@angular/core",
    buildPath: "dist" // relative path from the sample's root directory
  },
  "jsapi-create-react-app": {
    name: "CRA",
    package: "react-scripts",
    buildPath: "build"
  },
  "jsapi-vue": {
    name: "Vue",
    package: "vue",
    buildPath: "dist"
  },
  "rollup": {
    name: "Rollup",
    package: "rollup",
    devDep: true,
    buildPath: "public"
  },
  "webpack": {
    name: "Webpack",
    package: "webpack",
    devDep: true,
    buildPath: "dist"
  }
};

/**
 * Get the names of a directory's subdirectories (not recursive)
 * @param {string} directoryPath - path to the root directory
 * @returns {Promise<string[]>} subdirectory names
 */
const getDirectories = async (directoryPath) =>
  (await readdir(directoryPath, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".")
    .map((dirent) => dirent.name);

/**
 * Emphasizes a message in the console
 * @param {string} message - text to log
 */
const logHeader = (message) => {
  const line = "-".repeat(message.length + 8);
  console.log(`${line}\n|-> ${message} <-|\n${line}`);
};

/**
 * Executes a bash command, logs stderr, and returns stdout
 * @param {string} command - bash command
 * @returns {Promise<string>} the command's stdout
 */
const execLogErr = async (command) => {
  const { stdout, stderr } = await exec(command);
  !!stderr && console.error("stderr:\n", stderr);
  return stdout;
};

(async () => {
  try {
    const sampleDirectories = await getDirectories(SAMPLES_PATH);

    const jsapiVersions = (
      await Promise.all(
        sampleDirectories.map(
          async (sample) =>
            // only check versions of relevant samples
            !!SAMPLES_INFO[sample] &&
            JSON.parse(await readFile(resolve(__dirname, SAMPLES_PATH, sample, "package.json"), "utf8")).dependencies[
              "@arcgis/core"
            ].replace(/\^|\~/, "") // remove semver range
        )
      )
    ).filter((version) => !!version);

    // unique ArcGIS JSAPI versions from the relevant samples
    const jsapiVersionsUnique = new Set(jsapiVersions);

    if (jsapiVersionsUnique.size !== 1) {
      console.log("ArcGIS JSAPI versions: ", jsapiVersionsUnique);
      console.error("The samples have different versions of @arcgis/core, skipping build");
      return;
    }

    const [jsapiVersion] = jsapiVersionsUnique;
    logHeader(`ArcGIS JSAPI:  v${jsapiVersion}`);
    const outputPath = resolve(METRICS_PATH, `${jsapiVersion}.csv`);
    const stream = createWriteStream(outputPath);
    stream.write(
      "Sample,Build size (MB),Build on-disk size (MB),Build file count,Main bundle file,Main bundle size (MB),Main bundle gzipped size (MB),Main bundle brotli compressed size (MB)\n"
    );

    for (const sample of sampleDirectories) {
      if (!SAMPLES_INFO[sample]) continue; // skip samples with no info item

      const sampleName = SAMPLES_INFO[sample]?.name;
      const packageName = SAMPLES_INFO[sample]?.package;
      const samplePath = resolve(SAMPLES_PATH, sample);
      const buildPath = resolve(samplePath, SAMPLES_INFO[sample]?.buildPath);
      const packageFile = JSON.parse(await readFile(resolve(samplePath, "package.json"), "utf8"));

      const packageVersion = (
        !!SAMPLES_INFO[sample]?.devDep
          ? packageFile.devDependencies[packageName]
          : packageFile.dependencies[packageName]
      ).replace(/\^|\~/, "");

      logHeader(`${sampleName}: installing deps`);
      const installOut = await execLogErr(`cd ${samplePath} && npm i`);
      console.log(installOut);

      logHeader(`${sampleName}: building`);
      const buildOut = await execLogErr(`cd ${samplePath} && npm run build`);
      console.log(buildOut);

      logHeader(`${sampleName}: calculating build sizes`);
      const {
        mainBundleName,
        mainBundleSize,
        mainBundleSizeGzip,
        mainBundleSizeBrotli,
        buildSize,
        buildSizeOnDisk,
        buildFileCount
      } = await getBuildSizes(buildPath);

      // convert bytes to megabytes
      const mainBundleSizeMB = (mainBundleSize / 1024 ** 2).toFixed(2);
      const mainBundleSizeGzipMB = (mainBundleSizeGzip / 1024 ** 2).toFixed(2);
      const mainBundleSizeBrotliMB = (mainBundleSizeBrotli / 1024 ** 2).toFixed(2);
      const buildSizeMB = (buildSize / 1024 ** 2).toFixed(2);
      const buildSizeOnDiskMB = (buildSizeOnDisk / 1024 ** 2).toFixed(2);

      stream.write(
        `${sampleName} ${packageVersion},${buildSizeMB},${buildSizeOnDiskMB},${buildFileCount},${mainBundleName},${mainBundleSizeMB},${mainBundleSizeGzipMB},${mainBundleSizeBrotliMB}\n`
      );
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
