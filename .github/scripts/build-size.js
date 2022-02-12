#!/usr/bin/env node
const { resolve } = require("path");
const exec = require("util").promisify(require("child_process").exec);

/**
 * Takes an object containing build information and returns an object containing build sizes.
 * The build sizes are logged when ran via CLI.
 * @async @function
 * @param {string} samplePath - path to the sample's root directory ("$PWD" default)
 * @param {string} buildPath - path from samplePath to the build directory
 * @param {string} bundlePath - path from buildPath to the directory containing JS bundle files ("./" default)
 * @return {number} mainBundleSize - size in megabytes of the largest JavaScript bundle file
 * @return {number} buildSize - size in megabytes of all files in the build directory
 * @return {number} fileCount - count of all files in the build directory
 */
const calculateBuildSize = async ({ samplePath, buildPath, bundlePath }) => {
  const sample = !!samplePath ? resolve(__dirname, samplePath) : process.env.PWD;
  const build = resolve(sample, buildPath);
  const bundle = resolve(build, bundlePath || "./");

  const mainBundleSize = Number(
    (
      await exec(`find ${bundle} -name '*.js' -type f -printf "%s\t%p\n" | sort -nr | head -1 | cut -f1`)
    ).stdout.trim() / 1e6 // convert bytes to megabytes
  ).toFixed(2);

  const buildSize = Number((await exec(`du -sb ${build} | cut -f1`)).stdout.trim() / 1e6).toFixed(2);

  const fileCount = Number((await exec(`find ${build} -type f | wc -l`)).stdout.trim());

  return { mainBundleSize, buildSize, fileCount };
};

if (require.main === module) {
  (async () => {
    try {
      const [buildPath, bundlePath, samplePath] = process.argv.splice(2);

      const { mainBundleSize, buildSize, fileCount } = await calculateBuildSize({
        buildPath,
        bundlePath,
        samplePath
      });

      console.log(
        `Main bundle size (MB): ${mainBundleSize}\nOn-disk size (MB): ${buildSize}\nOn-disk files: ${fileCount}\n`
      );
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  })();
}

module.exports = calculateBuildSize;
