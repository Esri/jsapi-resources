#!/usr/bin/env node
const { resolve } = require("path");
const {
  promises: { readFile, writeFile },
} = require("fs");
const { getBuildSizes } = require("./build-size.js");
const browserPerformanceTest = require("./build-perf");
const SAMPLES_INFO = require("./samplesInfo.json");
const { logHeader, execLogErr } = require("./lib.js");

const SAMPLES_PATH = resolve(__dirname, "..", "..", "core-samples");
const SAMPLE_TARGET = process.env.SAMPLE_TARGET;
const outputPrefix = "analysis-";

const run = async () => {
  try {
    const sampleInfo = SAMPLES_INFO[SAMPLE_TARGET];
    if (!sampleInfo) {
      throw Error(
        `Sample ${SAMPLE_TARGET} not found in SAMPLES_INFO. Valid samples are: ${Object.keys(SAMPLES_INFO).join(", ")}`,
      );
    }

    const sampleName = sampleInfo?.name;
    const packageName = sampleInfo?.package;
    const mainFileName = sampleInfo?.mainFileName;
    const samplePath = resolve(SAMPLES_PATH, SAMPLE_TARGET);
    const buildPath = resolve(samplePath, sampleInfo?.buildPath);
    const packageFile = JSON.parse(await readFile(resolve(samplePath, "package.json"), "utf8"));

    const packageVersion = (
      !!sampleInfo?.devDep ? packageFile.devDependencies[packageName] : packageFile.dependencies[packageName]
    ).replace(/\^|\~/, "");

    logHeader(`${sampleName}: installing deps`);
    const installOut = await execLogErr(`cd ${samplePath} && npm i`);
    console.log(installOut);

    logHeader(`${sampleName}: building`);
    const buildOut = await execLogErr(`cd ${samplePath} && npm run build`);
    console.log(buildOut);

    logHeader(`${sampleName}: installing chrome for puppeteer`);
    const chromeInstallOut = await execLogErr(`cd ${samplePath} && npx puppeteer browsers install chrome`);
    console.log(chromeInstallOut);

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

    const outputFilename = `${outputPrefix}${SAMPLE_TARGET}.txt`;
    console.log("Writing results to txt:", outputFilename);
    writeFile(outputFilename, output);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

run();
