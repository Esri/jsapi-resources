#!/usr/bin/env node
const { resolve } = require("path");
const exec = require("util").promisify(require("child_process").exec);

/**
 * Executes a bash command, logs stderr, and returns stdout
 * @param {string} command - bash command
 * @returns {string} the command's stdout
 */
const execLogErr = async (command) => {
  const { stdout, stderr } = await exec(command);
  !!stderr && console.error("stderr:\n", stderr);
  return stdout;
};

/**
 * Emphasizes a message in the console
 * @param {string} message - text to log
 */
const logHeader = (message) => {
  const line = "-".repeat(message.length + 8);
  console.log(`${line}\n|-> ${message} <-|\n${line}`);
};

/**
 * Takes an object containing build information and returns an object containing build sizes.
 * The build sizes are logged when the script is ran via CLI.
 * @param {string} samplePath - relative path to the sample's root directory ("$PWD" default)
 * @param {string} buildPath - relative path from samplePath to the build directory
 * @returns {number} mainBundleSize - size in megabytes of the largest JavaScript bundle file
 * @returns {number} buildSize - size in megabytes of all files in the build directory
 * @returns {number} fileCount - count of all files in the build directory
 */
const calculateBuildSize = async ({ samplePath, buildPath }) => {
  const sample = !!samplePath ? resolve(__dirname, samplePath) : process.env.PWD;
  const build = resolve(sample, buildPath);

  const mainBundleSize = Number(
    // recursively find the largest js file in the build directory
    (await execLogErr(`find ${build} -name '*.js' -type f -printf "%s\t%p\n" | sort -nr | head -1 | cut -f1`)).trim() /
      1e6 // convert bytes to megabytes
  ).toFixed(2);

  const buildSize = Number((await execLogErr(`du -sb ${build} | cut -f1`)).trim() / 1e6).toFixed(2);

  const buildFileCount = Number((await execLogErr(`find ${build} -type f | wc -l`)).trim());

  return { mainBundleSize, buildSize, buildFileCount };
};

if (require.main === module) {
  (async () => {
    try {
      const [buildPath, samplePath] = process.argv.splice(2);

      const { mainBundleSize, buildSize, buildFileCount } = await calculateBuildSize({
        buildPath,
        samplePath
      });

      const headerText = "Sample Build Metrics";
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

module.exports.calculateBuildSize = calculateBuildSize;
module.exports.execLogErr = execLogErr;
module.exports.logHeader = logHeader;
