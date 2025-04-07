#!/usr/bin/env node
const { resolve } = require("path");
const {
  createWriteStream,
  promises: { readdir, readFile },
} = require("fs");
const exec = require("util").promisify(require("child_process").exec);
const SAMPLES_INFO = require("./samplesInfo.json");
const { getDirectories, logHeader } = require("./lib");

const SAMPLES_PATH = resolve(__dirname, "..", "..", "core-samples");
const METRICS_PATH = resolve(SAMPLES_PATH, ".metrics");
const ANALYSIS_OUTPUTS_PATH = process.env.ANALYSIS_OUTPUTS_PATH || resolve(__dirname, "..", "..", "analysis-texts");

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
