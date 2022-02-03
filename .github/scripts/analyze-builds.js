const { resolve } = require("path");
const { promisify } = require("util");
const {
  createWriteStream,
  promises: { readdir, readFile }
} = require("fs");
const exec = promisify(require("child_process").exec);

const EXAMPLES_PATH = "../../esm-samples";

const buildInfo = {
  "jsapi-angular-cli": {
    buildDirectory: "dist",
    bundleDirectory: "./",
    title: "Angular 13"
  },
  "jsapi-create-react-app": {
    buildDirectory: "build",
    bundleDirectory: "static/js",
    title: "CRA 17.0"
  },
  "jsapi-custom-widget": {
    buildDirectory: "dist",
    bundleDirectory: "assets",
    title: "Custom Widget (Vite 2.6)"
  },
  "jsapi-custom-workers": {
    buildDirectory: "dist",
    bundleDirectory: "./",
    title: "Custom Workers (Rollup + Webpack)"
  },
  "jsapi-ember-cli": {}, // Deprecated
  "jsapi-esm-cdn": {}, // N/A
  "jsapi-node": {
    buildDirectory: "public",
    title: "Node (Rollup 2.60)"
  },
  "jsapi-vue-cli": {
    buildDirectory: "dist",
    bundleDirectory: "js",
    title: "Vue 3.2 (Webpack 4 - default)"
  },
  "rollup": {
    buildDirectory: "public",
    bundleDirectory: "./",
    title: "Rollup 2.60"
  },
  "webpack": {
    buildDirectory: "dist",
    bundleDirectory: "./",
    title: "Webpack 5.64"
  }
};

const getDirectories = async (directoriesPath) =>
  (await readdir(resolve(__dirname, directoriesPath), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".")
    .map((dirent) => dirent.name);

(async () => {
  try {
    const exampleDirs = await getDirectories(EXAMPLES_PATH);

    const packageFile = resolve(__dirname, EXAMPLES_PATH, exampleDirs[0], "package.json");
    const version = JSON.parse(await readFile(packageFile, "utf8")).dependencies["@arcgis/core"].replace(/\^|\~/, "");

    console.log(`current version: ${version}`);
    const outputPath = resolve(__dirname, "../build-sizes", `${version}.csv`);
    const stream = createWriteStream(outputPath);
    stream.write("Sample,Main bundle size,On-disk size\n");

    for (example of exampleDirs) {
      const buildDir = buildInfo[example]?.buildDirectory;
      const bundleDir = buildInfo[example]?.bundleDirectory;
      const exampleTitle = buildInfo[example]?.title;

      if (!!buildDir) {
        const examplePath = resolve(__dirname, EXAMPLES_PATH, example);
        const buildPath = resolve(examplePath, buildDir);

        console.log(`${example}: installing deps`);
        await exec(`npm i --prefix ${examplePath}`);

        console.log(`${example}: building`);
        await exec(`npm run build --prefix ${examplePath}`);

        console.log(`${example}: calculating size`);
        const buildSize = (await exec(`du -sh ${buildPath} | cut -f1`)).stdout.trim();
        const fileCount = (await exec(`find ${buildPath} -type f | wc -l`)).stdout.trim();
        const mainBundleSize = !!bundleDir
          ? Number(
              (
                await exec(
                  // largest js bundle file
                  `du -a --exclude="*.map" ${resolve(buildPath, bundleDir)}/ | sort -n -r | sed -n 2p | cut -f1`
                )
              ).stdout.trim() / 1000 // convert kb to mb
            )
              .toFixed(1)
              .toString()
              .concat("M")
          : "N/A";
        const title = !!exampleTitle ? exampleTitle : example.replace(/^jsapi-/, "");

        stream.write(`${title},${mainBundleSize},${buildSize} (${fileCount} files)\n`);
      }
    }
  } catch (err) {
    console.error(err);
  }
})();
