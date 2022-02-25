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
 * Returns all files in a directory (recursive).
 * @param {string} directoryPath - path to the directory containing the files
 * @returns {Promise<File[]>} all files in the directory and subdirectories
 */
const getFiles = async (directoryPath) => {
  const entries = await readdir(directoryPath, { withFileTypes: true });
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => ({ ...file, path: resolve(directoryPath, file.name) }));

  const directories = entries.filter((folder) => folder.isDirectory());

  for (const directory of directories) {
    // recursive calls for subdirectories
    const subdirectoryFiles = await getFiles(resolve(directoryPath, directory.name));
    files.push(...subdirectoryFiles);
  }
  return files;
};

/**
 * Formats bytes to a human readable size.
 * @param {number} bytes - bytes to format
 * @param {number} [decimals=2] - decimal precision for rounding
 * @param {boolean} [binary=true] - binary or decimal conversion
 * @returns {string} human readable file size with units
 */
const formatBytes = (bytes, decimals = 2, binary = true) => {
  if (!bytes) return "0 B";

  const unitSizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const k = binary ? 1024 : 1000; // binary vs decimal conversion
  const d = !decimals || decimals < 0 ? 0 : decimals; // no negative decimal precision
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(d))} ${unitSizes[i]}`;
};

/**
 * Filters files by file type. Use {@link getFiles} to retrieve your build files.
 * @param {File[]} files - files to filter
 * @param {string} type - file type, e.g. "js", "tsx", etc.
 * @returns {File[]} files filtered by file type
 */
const filterFilesByType = (files, type) => files.filter((file) => new RegExp(`.${type}$`, "i").test(file.name));

/**
 * Gets file sizes in bytes. Use {@link getFiles} to retrieve your build files.
 * @param {File[]} files - files to measure
 * @returns {Promise<number[]>} sizes of the files in bytes
 */
const getFileSizes = async (files) => await Promise.all(files.map(async (file) => (await stat(file.path)).size));

/**
 * Provides sizes for an application's production build.
 * @param {string} buildPath - path to the build directory
 * @param {string} [bundleFileType="js"] - type of bundle files, e.g. "js", "css", etc.
 * @returns {Promise<BuildSizes>} build sizes
 */
const getBuildSizes = async (buildPath, bundleFileType = "js") => {
  const build = resolve(process.cwd(), buildPath);
  const buildFiles = await getFiles(build);
  const filteredBuildFiles = filterFilesByType(buildFiles, bundleFileType);
  const allFileSizes = await getFileSizes(buildFiles);
  const filteredFileSizes = await getFileSizes(filteredBuildFiles);

  // largest file size by type
  const mainBundleSize = filteredFileSizes.length ? Math.max(...filteredFileSizes) : 0;

  // sum of all file sizes
  const buildSize = allFileSizes.reduce((count, fileSize) => count + fileSize, 0);

  const buildFileCount = buildFiles.length;

  return { mainBundleSize, buildSize, buildFileCount };
};

/**
 * File information used for determining type and size.
 * @typedef {Object} File
 * @property {string} name - file name
 * @property {string} path - file path
 * @see {@link getFiles}
 * @see {@link getFileSizes}
 * @see {@link filterFilesByType}
 */

/**
 * The primary output of the script.
 * @typedef {Object} BuildSizes
 * @property {number} mainBundleSize - size in bytes of the largest bundle file by type
 * @property {number} buildSize - size in bytes of all files in the build directory
 * @property {number} buildFileCount - count of all files in the build directory
 * @see {@link getBuildSizes}
 */

// only runs from the CLI
if (require.main === module) {
  (async () => {
    try {
      const [buildPath, bundleFileType] = process.argv.splice(2);

      if (!buildPath) {
        throw new Error("Error: Invalid or missing arguments. The path to the build directory is required.");
      }

      const { mainBundleSize, buildSize, buildFileCount } = await getBuildSizes(buildPath, bundleFileType || "js");

      const headerText = "Application Build Sizes";
      logHeader(headerText);

      console.log(
        `\nMain ${bundleFileType || "js"} bundle size:`,
        formatBytes(mainBundleSize),
        "\nOn-disk build size:",
        formatBytes(buildSize),
        "\nOn-disk build files:",
        buildFileCount,
        `\n${"-".repeat(headerText.length + 8)}`
      );
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  })();
}

module.exports = { getBuildSizes, formatBytes, getFiles, getFileSizes, filterFilesByType, logHeader };
