#!/usr/bin/env node
const { resolve } = require("path");
const {
  createWriteStream,
  promises: { readdir, readFile },
} = require("fs");
const exec = require("util").promisify(require("child_process").exec);
const SAMPLES_INFO = require("./samplesInfo.json");

const SAMPLES_PATH = resolve(__dirname, "..", "..", "core-samples");
const METRICS_PATH = resolve(SAMPLES_PATH, ".metrics");
const ANALYSIS_OUTPUTS_PATH = process.env.ANALYSIS_OUTPUTS_PATH || resolve(__dirname, "..", "..", "analysis-texts");

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
            ].replace(/\^|\~/, ""), // remove semver range
        ),
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
      "Sample,Build size (MB),Build file count,Main bundle file,Main bundle size (MB),Main bundle gzipped size (MB),Main bundle brotli compressed size (MB),Load time (ms),Total runtime (ms),Loaded size (MB),Total JS requests,Total JS size (MB),Total HTTP requests,JS heap size (MB)\n",
    );

    const anaylsisOutputs = await readdir(ANALYSIS_OUTPUTS_PATH);

    for (const file of anaylsisOutputs) {
      if (/^analysis-.*\.txt$/.test(file)) {
        const analysisResult = await readFile(resolve(ANALYSIS_OUTPUTS_PATH, file), "utf8");
        stream.write(analysisResult);
      }
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
