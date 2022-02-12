#!/usr/bin/env node
const { resolve } = require("path");
const {
  createWriteStream,
  promises: { readdir, readFile }
} = require("fs");
const exec = require("util").promisify(require("child_process").exec);
const calculateBuildSize = require("./build-size.js");

const SAMPLES_PATH = resolve(__dirname, "../../esm-samples");

const SAMPLES_INFO = {
  "jsapi-angular-cli": {
    name: "Angular",
    package: "@angular/core",
    buildDirectory: "dist",
    bundleDirectory: "./"
  },
  "jsapi-create-react-app": {
    name: "CRA",
    package: "react-scripts",
    buildDirectory: "build",
    bundleDirectory: "static/js"
  },
  "jsapi-vue": {
    name: "Vue",
    package: "vue",
    buildDirectory: "dist",
    bundleDirectory: "assets"
  },
  "rollup": {
    name: "Rollup",
    package: "rollup",
    devDep: true,
    buildDirectory: "public",
    bundleDirectory: "./"
  },
  "webpack": {
    name: "Webpack",
    package: "webpack",
    devDep: true,
    buildDirectory: "dist",
    bundleDirectory: "./"
  }
};

const getDirectories = async (directoriesPath) =>
  (await readdir(directoriesPath, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".")
    .map((dirent) => dirent.name);

(async () => {
  try {
    const sampleDirs = await getDirectories(SAMPLES_PATH);

    const jsapiVersions = new Set(
      (
        await Promise.all(
          sampleDirs.map(
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
      console.warn("The samples have different versions of @arcgis/core, skipping build");
      return;
    }

    const [jsapiVersion] = jsapiVersions;
    console.log(`ArcGIS JSAPI:  v${jsapiVersion}`);
    const outputPath = resolve(__dirname, "../../esm-samples/.metrics", `${jsapiVersion}.csv`);
    const stream = createWriteStream(outputPath);
    stream.write("Sample,Main bundle size (MB),On-disk size (MB), On-disk files\n");

    for (sample of sampleDirs) {
      if (!SAMPLES_INFO[sample]) continue;

      const sampleName = SAMPLES_INFO[sample]?.name;
      const packageName = SAMPLES_INFO[sample]?.package;
      const samplePath = resolve(SAMPLES_PATH, sample);
      const buildPath = SAMPLES_INFO[sample].buildDirectory;
      const bundlePath = SAMPLES_INFO[sample].bundleDirectory;
      const packageFile = JSON.parse(await readFile(resolve(samplePath, "package.json"), "utf8"));

      const packageVersion = (
        !!SAMPLES_INFO[sample]?.devDep
          ? packageFile.devDependencies[packageName]
          : packageFile.dependencies[packageName]
      ).replace(/\^|\~/, "");

      console.log(`${sampleName}: installing deps`);
      await exec(`npm i --prefix ${samplePath}`);

      console.log(`${sampleName}: building`);
      await exec(`npm run build --prefix ${samplePath}`);

      console.log(`${sampleName}: calculating build sizes`);
      const { mainBundleSize, buildSize, fileCount } = await calculateBuildSize({
        samplePath,
        buildPath,
        bundlePath
      });

      stream.write(`${sampleName} ${packageVersion},${mainBundleSize},${buildSize},${fileCount}\n`);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
