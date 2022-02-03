const { resolve } = require("path");
const { promisify } = require("util");
const {
  createWriteStream,
  promises: { readdir, readFile }
} = require("fs");
const exec = promisify(require("child_process").exec);

const EXAMPLES_PATH = "../../esm-samples";

const buildInfo = {
  "jsapi-angular-cli": {}, // build fails on my machine
  "jsapi-create-react-app": {
    buildDirectory: "build",
    mainBundle: "static/js/main.*.chunk.js", // wrong main bundle file?
    title: "CRA 17.0"
  },
  "jsapi-custom-widget": {
    buildDirectory: "dist",
    mainBundle: "assets/vendor.*.js",
    title: "Custom Widget (Vite 2.6)"
  },
  "jsapi-custom-workers": {
    buildDirectory: "dist",
    mainBundle: "index.js",
    title: "Custom Workers (Rollup + Webpack)"
  },
  "jsapi-ember-cli": {}, // build fails on my machine
  "jsapi-esm-cdn": {}, // N/A
  "jsapi-node": {
    buildDirectory: "public",
    title: "Node (Rollup 2.60)"
  },
  "jsapi-vue-cli": {
    buildDirectory: "dist",
    mainBundle: "js/app.*.js", // wrong main bundle file?
    title: "Vue 3.2 (Webpack 4 - default)"
  },
  "rollup": {
    buildDirectory: "public",
    mainBundle: "main.js",
    title: "Rollup 2.60"
  },
  "webpack": {
    buildDirectory: "dist",
    mainBundle: "index.js",
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
    const outputPath = resolve(__dirname, "../build-sizes");
    const stream = createWriteStream(`${outputPath}/${version}.csv`);
    stream.write("Sample,Main bundle size,On-disk size\n");

    for (example of exampleDirs) {
      const buildDir = buildInfo[example]?.buildDirectory;
      const bundleFile = buildInfo[example]?.mainBundle;
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
        const bundleSize = !!bundleFile
          ? (await exec(`du -sh ${resolve(buildPath, bundleFile)} | cut -f1`)).stdout.trim()
          : "N/A";
        const title = !!exampleTitle ? exampleTitle : example.replace(/^jsapi-/, "");

        stream.write(`${title},${bundleSize},${buildSize} (${fileCount} files)\n`);
      }
    }
  } catch (err) {
    console.error(err);
  }
})();
