const { resolve } = require("path");
const { promisify } = require("util");
const {
  createWriteStream,
  promises: { readdir, readFile }
} = require("fs");
const exec = promisify(require("child_process").exec);

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
  "jsapi-vue-cli": {
    name: "Vue",
    package: "vue",
    buildDirectory: "dist",
    bundleDirectory: "js"
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

    const jsapiVersion = JSON.parse(
      await readFile(resolve(__dirname, SAMPLES_PATH, sampleDirs[0], "package.json"), "utf8")
    ).dependencies["@arcgis/core"].replace(/\^|\~/, ""); // remove semver range

    console.log(`ArcGIS JSAPI:  v${jsapiVersion}`);
    const outputPath = resolve(__dirname, "../build-metrics", `${jsapiVersion}.csv`);
    const stream = createWriteStream(outputPath);
    stream.write("Sample,Main bundle size,On-disk size\n");

    console.log("Installing dependencies and building samples");
    await Promise.all(
      sampleDirs.map((sample) =>
        !!SAMPLES_INFO[sample]?.name
          ? exec(
              `npm i --prefix ${resolve(SAMPLES_PATH, sample)} && npm run build --prefix ${resolve(
                SAMPLES_PATH,
                sample
              )}`
            )
          : null
      )
    );

    for (sample of sampleDirs) {
      const buildDir = SAMPLES_INFO[sample]?.buildDirectory;
      const bundleDir = SAMPLES_INFO[sample]?.bundleDirectory;
      const sampleName = SAMPLES_INFO[sample]?.name;
      const packageName = SAMPLES_INFO[sample]?.package;
      const isDevDep = SAMPLES_INFO[sample]?.devDep;

      if (!!buildDir) {
        const samplePath = resolve(SAMPLES_PATH, sample);
        const buildPath = resolve(samplePath, buildDir);

        const packageFile = JSON.parse(await readFile(resolve(samplePath, "package.json"), "utf8"));

        const packageVersion = (
          !!isDevDep ? packageFile.devDependencies[packageName] : packageFile.dependencies[packageName]
        ).replace(/\^|\~/, "");

        console.log(`${sampleName}: calculating size`);
        const buildSize = (await exec(`du -sh ${buildPath} | cut -f1`)).stdout.trim();
        const fileCount = (await exec(`find ${buildPath} -type f | wc -l`)).stdout.trim();
        const mainBundleSize = Number(
          (
            await exec(
              `find ${resolve(
                buildPath,
                bundleDir
              )} -name '*.js' -type f -printf "%s\t%p\n" | sort -nr | head -1 | cut -f1`
            )
          ).stdout.trim() / 1e6 // convert bytes to megabytes
        )
          .toFixed(1)
          .toString()
          .concat("M");

        stream.write(`${sampleName} ${packageVersion},${mainBundleSize},${buildSize} (${fileCount} files)\n`);
      }
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
