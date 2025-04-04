const {
  promises: { readdir },
} = require("fs");
const exec = require("util").promisify(require("child_process").exec);

/**
 * Get the names of a directory's subdirectories (not recursive)
 * @param {string} directoryPath - path to the root directory
 * @returns {Promise<string[]>} subdirectory names
 */
module.exports.getDirectories = async (directoryPath) =>
  (await readdir(directoryPath, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".")
    .map((dirent) => dirent.name);

/**
 * Emphasizes a message in the console
 * @param {string} message - text to log
 */
module.exports.logHeader = (message) => {
  const line = "-".repeat(message.length + 8);
  console.log(`${line}\n|-> ${message} <-|\n${line}`);
};

/**
 * Executes a bash command, logs stderr, and returns stdout
 * @param {string} command - bash command
 * @returns {Promise<string>} the command's stdout
 */
module.exports.execLogErr = async (command) => {
  const { stdout, stderr } = await exec(command);
  !!stderr && console.error("stderr:\n", stderr);
  return stdout;
};
