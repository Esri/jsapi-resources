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
    ).dependencies["@arcgis/core"].replace(/\^|\~/, "");

    console.log(`JSAPI version: ${jsapiVersion}`);
    const outputPath = resolve(__dirname, "../build-sizes", `${jsapiVersion}.csv`);
    const stream = createWriteStream(outputPath);
    stream.write("Sample,Main bundle size,On-disk size\n");

    for (sample of sampleDirs) {
      const buildDir = SAMPLES_INFO[sample]?.buildDirectory;
      const bundleDir = SAMPLES_INFO[sample]?.bundleDirectory;
      const sampleName = SAMPLES_INFO[sample]?.name;
      const samplePackage = SAMPLES_INFO[sample]?.package;
      const isPackageDevDep = SAMPLES_INFO[sample]?.devDep;

      if (!!buildDir) {
        const samplePath = resolve(SAMPLES_PATH, sample);
        const buildPath = resolve(samplePath, buildDir);

        const samplePackageFile = JSON.parse(await readFile(resolve(samplePath, "package.json"), "utf8"));

        const packageVersion = (
          !!isPackageDevDep
            ? samplePackageFile.devDependencies[samplePackage]
            : samplePackageFile.dependencies[samplePackage]
        ).replace(/\^|\~/, "");

        console.log(`${sampleName}: installing deps`);
        await exec(`npm i --prefix ${samplePath}`);

        console.log(`${sampleName}: building`);
        await exec(`npm run build --prefix ${samplePath}`);

        console.log(`${sampleName}: calculating size`);
        const buildSize = (await exec(`du -sh ${buildPath} | cut -f1`)).stdout.trim();
        const fileCount = (await exec(`find ${buildPath} -type f | wc -l`)).stdout.trim();
        const mainBundleSize = Number(
          (
            await exec(`du -a --exclude="*.map" ${resolve(buildPath, bundleDir)}/ | sort -n -r | sed -n 2p | cut -f1`)
          ).stdout.trim() / 1000 // convert kb to mb
        )
          .toFixed(1)
          .toString()
          .concat("M");

        stream.write(`${sampleName} ${packageVersion},${mainBundleSize},${buildSize} (${fileCount} files)\n`);
      }
    }
  } catch (err) {
    console.error(err);
  }
})();
