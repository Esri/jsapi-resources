#!/usr/bin/env node
const { resolve } = require("path");
const {
  createWriteStream,
  promises: { readFile },
} = require("fs");
const { getBuildSizes } = require("./build-size.js");
const browserPerformanceTest = require("./build-perf");
const SAMPLES_INFO = require("./samplesInfo.json");
const { getDirectories, execLogErr, logHeader } = require("./lib.js");

const SAMPLES_PATH = resolve(__dirname, "..", "..", "core-samples");
const METRICS_PATH = resolve(SAMPLES_PATH, ".metrics");

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

    for (const [itemCount, sample] of sampleDirectories.entries()) {
      if (!SAMPLES_INFO[sample]) continue; // skip samples with no info item

      const sampleName = SAMPLES_INFO[sample]?.name;
      const packageName = SAMPLES_INFO[sample]?.package;
      const mainFileName = SAMPLES_INFO[sample]?.mainFileName;
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
      const bundleFileType = "js"; // reserved for future use, e.g. .js, css, .ts
      const { mainBundleName, mainBundleSize, mainBundleSizeGzip, mainBundleSizeBrotli, buildSize, buildFileCount } =
        await getBuildSizes(buildPath, bundleFileType, mainFileName);

      // convert bytes to megabytes
      const mainBundleSizeMB = (mainBundleSize / 1024 ** 2).toFixed(2);
      const mainBundleSizeGzipMB = (mainBundleSizeGzip / 1024 ** 2).toFixed(2);
      const mainBundleSizeBrotliMB = (mainBundleSizeBrotli / 1024 ** 2).toFixed(2);
      const buildSizeMB = (buildSize / 1024 ** 2).toFixed(2);

      logHeader(`${sampleName}: calculating performance info`);
      // Creating a single object due to duplication of sampleName.
      const perfResults = await browserPerformanceTest(buildPath, sampleName);
      // convert bytes to megabytes
      const pageTotalMB = (perfResults.pageTotalBytes / 1024 ** 2).toFixed(2);
      const pageTotalJSMB = (perfResults.pageTotalJSBytes / 1024 ** 2).toFixed(2);
      const JSHeapUsedSizeMB = (perfResults.JSHeapUsedSizeBytes / 1024 ** 2).toFixed(2);

      const output = `${sampleName} ${packageVersion},${buildSizeMB},${buildFileCount},${mainBundleName},${mainBundleSizeMB},${mainBundleSizeGzipMB},${mainBundleSizeBrotliMB},${perfResults.elapsedRuntimeMS},${perfResults.totalScriptTimeMS},${pageTotalMB},${perfResults.totalJSRequests},${pageTotalJSMB},${perfResults.totalHTTPRequests},${JSHeapUsedSizeMB}\n`;

      console.log("Writing results to CSV:", output);
      stream.write(output);

      if (itemCount === sampleDirectories.length - 1) {
        console.log("JOB COMPLETE");
      }
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
