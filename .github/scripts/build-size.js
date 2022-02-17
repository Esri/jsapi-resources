#!/usr/bin/env node
const { resolve } = require("path");
const {
  promises: { readdir, stat }
} = require("fs");

/**
 * Emphasizes a message in the console
 * @param {string} message - text to log
 */
const logHeader = (message) => {
  const line = "-".repeat(message.length + 8);
  console.log(`${line}\n|-> ${message} <-|\n${line}`);
};

/**
 * Returns all files in a directory (recursively)
 * @param {string} buildPath - path to the build directory
 * @returns {Promise<{path: string, name: string}>} file path and name
 */
const getFiles = async (buildPath) => {
  const entries = await readdir(buildPath, { withFileTypes: true });
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => ({ ...file, path: resolve(buildPath, file.name) }));
  const directories = entries.filter((folder) => folder.isDirectory());

  for (const directory of directories) {
    const subdirectoryFiles = await getFiles(resolve(buildPath, directory.name));
    files.push(...subdirectoryFiles);
  }
  return files;
};

/**
 * Provides sizes for an application's production build
 * @param {string} buildPath - path from the current working directory to the build directory
 * @returns {Promise<{ mainBundleSize: string, buildSize:string , buildFileCount: string}>}
 * - mainBundleSize - size in megabytes of the largest JavaScript bundle file
 * - buildSize - size in megabytes of all files in the build directory
 * - buildFileCount - count of all files in the build directory
 */
const getBuildSizes = async (buildPath) => {
  const build = resolve(process.cwd(), buildPath);

  const buildFiles = await getFiles(build);

  const mainBundleSize = (
    Math.max(
      ...(await Promise.all(
        buildFiles.filter((file) => /.js$/.test(file.name)).map(async (file) => (await stat(file.path)).size)
      ))
    ) / 1024**2 // bytes to megabytes
  ).toFixed(2);

  const buildSize = (
    (await Promise.all(buildFiles.map(async (file) => (await stat(file.path)).size))).reduce(
      (count, fileSize) => count + fileSize,
      0
    ) / 1024**2
  ).toFixed(2);

  const buildFileCount = buildFiles.length;

  return { mainBundleSize, buildSize, buildFileCount };
};

if (require.main === module) {
  (async () => {
    try {
      const [buildPath] = process.argv.splice(2);

      if (!buildPath) {
        throw new Error(
          "Error: Invalid or missing arguments. The path from the current working directory to the production build directory is a required."
        );
      }

      const { mainBundleSize, buildSize, buildFileCount } = await getBuildSizes(buildPath);

      const headerText = "Application Build Sizes";
      logHeader(headerText);
      console.log(
        `Main bundle size (MB): ${mainBundleSize}\nOn-disk size (MB): ${buildSize}\nOn-disk files: ${buildFileCount}`
      );
      console.log("-".repeat(headerText.length + 8));
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  })();
}

module.exports = { getBuildSizes, logHeader };
