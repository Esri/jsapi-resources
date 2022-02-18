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
 * @param {string} directoryPath - path from the current working directory to the directory containing the files
 * @returns {Promise<{path: string, name: string}[]>} file path and name
 */
const getFiles = async (directoryPath) => {
  const entries = await readdir(directoryPath, { withFileTypes: true });
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => ({ ...file, path: resolve(directoryPath, file.name) }));

  const directories = entries.filter((folder) => folder.isDirectory());

  for (const directory of directories) {
    const subdirectoryFiles = await getFiles(resolve(directoryPath, directory.name));
    files.push(...subdirectoryFiles);
  }
  return files;
};

/**
 * Formats bytes to a human readable size
 * @param {number} bytes - bytes to format into human readable size
 * @param {number} [decimals=2] - decimal precision for rounding
 * @param {boolean} [binary=true] - binary or decimal conversion
 * @returns {string} human readable file size with units
 */
const formatBytes = (bytes, decimals = 2, binary = true) => {
  if (bytes === 0) return "0 Bytes";

  const unitSizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const k = binary ? 1024 : 1000; // binary vs decimal conversion
  const d = !decimals || decimals < 0 ? 0 : decimals; // no negative decimal precision
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(d))} ${unitSizes[i]}`;
};

/**
 * Filters files by filetype
 * @param {{path: string, name: string}[]} files - files from the `getFiles` function
 * @param {string} type - file type, e.g. "js", "css", "tsx", etc.
 * @returns {{path: string, name: string}[]} - files filtered by filetype
 */
const filterFilesByType = (files, type) => files.filter((file) => new RegExp(`.${type}$`, "i").test(file.name));

/**
 * Gets file sizes
 * @param {{path: string, name: string}[]} files - files from the `getFiles` function
 * @returns {Promise<number[]>} sizes of the files
 */
const getFileSizes = async (files) => await Promise.all(files.map(async (file) => (await stat(file.path)).size));

/**
 * Provides sizes for an application's production build
 * @param {string} buildPath - path from the current working directory to the build directory
 * @returns {Promise<{ mainBundleSize: number, buildSize:number, buildFileCount: number}>}
 * - mainBundleSize - size in bytes of the largest JavaScript bundle file
 * - buildSize - size in bytes of all files in the build directory
 * - buildFileCount - count of all files in the build directory
 */
const getBuildSizes = async (buildPath) => {
  const build = resolve(process.cwd(), buildPath);
  const buildFiles = await getFiles(build);

  // largest javascript file
  const mainBundleSize = Math.max(...(await getFileSizes(filterFilesByType(buildFiles, "js"))));
  // sum of file sizes
  const buildSize = (await getFileSizes(buildFiles)).reduce((count, fileSize) => count + fileSize, 0);
  const buildFileCount = buildFiles.length;

  return { mainBundleSize, buildSize, buildFileCount };
};

// only runs from the CLI
if (require.main === module) {
  (async () => {
    try {
      const [buildPath] = process.argv.splice(2);

      if (!buildPath) {
        throw new Error(
          "Error: Invalid or missing arguments. The path from the current working directory to the production build directory is required."
        );
      }

      const { mainBundleSize, buildSize, buildFileCount } = await getBuildSizes(buildPath);

      const headerText = "Application Build Sizes";
      logHeader(headerText);

      console.log(
        "Main bundle size: ",
        formatBytes(mainBundleSize),
        "\nOn-disk size: ",
        formatBytes(buildSize),
        "\nOn-disk files: ",
        buildFileCount
      );

      console.log("-".repeat(headerText.length + 8));
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  })();
}

module.exports = { getBuildSizes, formatBytes, getFiles, getFileSizes, filterFilesByType, logHeader };
