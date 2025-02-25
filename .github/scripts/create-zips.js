#!/usr/bin/env node

/**
 * **WARNING:** when running this script locally, make sure you don't have any built samples,
 * they will get zipped!
 * This script creates zips for the samples in the SAMPLE_DIRS array.
 * Everything in the directory path will be zipped.
 * The zips will be created in the OUTPUT_DIR directory.
 * The zips will be named as follows: {name of the sample directory}-{name of the subdirectory}.zip
 * For example, core-sample-01.zip
 */
const { resolve } = require("path");
const {
  promises: { readdir },
  existsSync,
  mkdirSync,
  rmSync
} = require("fs");
const { createWriteStream } = require("fs-extra");
const archiver = require("archiver");

const OUTPUT_DIR = "../../zips";
const SAMPLES_RELATIVE_PATH = "../../";

// The list of sample directories to be zipped.
// Everything in the directory path will be zipped.
const SAMPLE_DIRS = [
  { dir: "core-samples", name: "core-sample" },
  { dir: "component-samples/map-components/samples", name: "map-component-sample" },
  { dir: "component-samples/map-components/tutorials", name: "map-components-tutorial" },
  { dir: "component-samples/charts-components/samples", name: "charts-components-sample" },
  { dir: "component-samples/charts-components/tutorials", name: "charts-components-tutorial" },
  { dir: "component-samples/coding-components/samples", name: "coding-components-sample" }
];

// Stand-alone samples with no subdirectories
const SAMPLE_DIRS_NOSUBDIR = [
  { dir: "component-samples/components-oauth", name: "components-oauth-sample" },
  { dir: "component-samples/disconnected-environment", name: "disconnected-sample" }
]

/**
 * Emphasizes a message in the console
 * @param {string} message - text to log
 */
const logHeader = (message) => {
  const line = "-".repeat(message.length + 8);
  console.log(`${line}\n|-> ${message} <-|\n${line}`);
};

/**
 * Verify and create the output directory.
 * If the directory already exists then delete it and recreate it.
 * @param {String} directory - path to the directory
 */
const createZipDirectory = (directory) => {
  if (!existsSync(directory)) {
    console.log(`Creating the directory ${directory}...`);
    mkdirSync(directory);
  }
  else {
    console.log(`The directory ${directory} already exists. Deleting and recreating...`);
    rmSync(directory, { recursive: true });
    mkdirSync(directory);
  }
}

/**
 * Get the names of a directory's subdirectories (not recursive)
 * @param {string} directoryPath - path to the root directory
 * @returns {Promise<string[]>} subdirectory names
 */
const getSubDirectories = async (directoryPath) => {
  const dirs = await readdir(directoryPath, { withFileTypes: true });
  const dirList = dirs.filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".");
  return dirList.map((dirent) => dirent);
}

/**
 * Creates zips for the samples in the SAMPLE_DIRS array
 * @return {Promise<void>}
 */
const createZips = async () => {
  logHeader("Creating zips for the samples...");
  createZipDirectory(OUTPUT_DIR); // Create the output directory if it doesn't exist

  await Promise.all(SAMPLE_DIRS.map(async (directoryList) => {
    const subDirs = await getSubDirectories(resolve(__dirname, SAMPLES_RELATIVE_PATH, directoryList.dir));
    await Promise.all(subDirs.map(async (dir) => {
      await createArchive(`${SAMPLES_RELATIVE_PATH}${directoryList.dir}/${dir.name}`, OUTPUT_DIR, `${directoryList.name}-${dir.name}`);
    }));
  }));

  await Promise.all(SAMPLE_DIRS_NOSUBDIR.map(async (directoryList) => {
    await createArchive(`${SAMPLES_RELATIVE_PATH}${directoryList.dir}`, OUTPUT_DIR, `${directoryList.name}`);
  }));
}

/**
 * This function takes the input directory and creates the zip file in the output directory.
 * @param {string} inputDirectoryPath
 * @param {string} outputDirectoryPath
 * @param {string} zipFileName
 * @return {Promise<void>}
 */
const createArchive = async (inputDirectoryPath, outputDirectoryPath, zipFileName) =>
  new Promise((resolve, reject) => {
    logHeader(`Creating zip for ${inputDirectoryPath}`);
    const output = createWriteStream(`${outputDirectoryPath}/${zipFileName}.zip`);
    const archive = archiver("zip", {
      name: zipFileName,
      // https://nodejs.org/api/zlib.html#zlib_class_options
      zlib: { level: 9 } // Sets the compression level.
    });

    output.on("finish", () => {
      resolve();
    });

    archive.on('warning', function (err) {
      console.log(err);
    });

    archive.on("error", (e) => {
      reject(e);
    });

    // pipe archive data to the file
    archive.pipe(output);

    // add the rest of the files in the directory and subdirectories to the archive
    archive.directory(inputDirectoryPath, zipFileName);

    // finalize the archive (ie we are done appending files but streams have to finish)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize();
  });

// createArchive("../../component-samples/coding-components/samples/vite", "../../zips", "vite");

createZips();