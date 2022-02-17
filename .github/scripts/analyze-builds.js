#!/usr/bin/env node
const { resolve } = require("path");
const {
  createWriteStream,
  promises: { readdir, readFile }
} = require("fs");
const exec = require("util").promisify(require("child_process").exec);
const { getBuildSizes, logHeader } = require("./build-size.js");

const SAMPLES_PATH = resolve(__dirname, "../../esm-samples");

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

    const jsapiVersions = new Set(
      (
        await Promise.all(
          sampleDirectories.map(
            async (sample) =>
              !!SAMPLES_INFO[sample] &&
              JSON.parse(await readFile(resolve(__dirname, SAMPLES_PATH, sample, "package.json"), "utf8")).dependencies[
                "@arcgis/core"
              ].replace(/\^|\~/, "") // remove semver range
          )
        )
      ).filter((version) => !!version)
    );

    if (jsapiVersions.size !== 1) {
      console.log("ArcGIS JSAPI versions: ", jsapiVersions);
      console.error("The samples have different versions of @arcgis/core, skipping build");
      return;
    }

    const [jsapiVersion] = jsapiVersions;
    logHeader(`ArcGIS JSAPI:  v${jsapiVersion}`);
    const outputPath = resolve(__dirname, "../../esm-samples/.metrics", `${jsapiVersion}.csv`);
    const stream = createWriteStream(outputPath);
    stream.write("Sample,Main bundle size (MB),On-disk size (MB), On-disk files\n");

    for (const sample of sampleDirectories) {
      if (!SAMPLES_INFO[sample]) continue;

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

      const installOut = await execLogErr(`npm i --prefix ${samplePath}`);
      console.log(installOut);

      logHeader(`${sampleName}: building`);
      const buildOut = await execLogErr(`npm run build --prefix ${samplePath}`);
      console.log(buildOut);

      logHeader(`${sampleName}: calculating build sizes`);
      const { mainBundleSize, buildSize, buildFileCount } = await getBuildSizes(buildPath);

      const mainBundleSizeMB = (mainBundleSize / 1024 ** 2).toFixed(2);
      const buildSizeMB = (buildSize / 1024 ** 2).toFixed(2);

      stream.write(`${sampleName} ${packageVersion},${mainBundleSizeMB},${buildSizeMB},${buildFileCount}\n`);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
