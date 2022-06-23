#!/usr/bin/env node
const { resolve } = require("path");
const { readdir, stat, readFile, appendFile, writeFile } = require("fs/promises");
const { promisify } = require("util");
const { gzip, brotliCompress } = require("zlib");
const compressGzip = promisify(gzip);
const compressBrotli = promisify(brotliCompress);
const browserPerformanceTest = require("./build-perf");

/**
 * Formats bytes to a human readable size.
 * @since v2.1.0
 * @param {number} bytes - bytes to format
 * @param {number} [decimals=2] - decimal precision for rounding
 * @param {boolean} [binary=false] - binary or decimal unit conversion
 * @returns {string} human readable file size with units
 */
const formatBytes = (bytes, decimals = 2, binary = false) => {
  try {
    if (!bytes) return "0 B";
    const k = binary ? 1024 : 1000;
    const n = binary ? ~~(Math.log10(bytes) / 3) : ~~(Math.log2(bytes) / 10);
    return (bytes / Math.pow(k, n)).toFixed(decimals) + " " + ("KMGTPEZY"[n - 1] || "") + "B";
  } catch (err) {
    help(
      err,
      "\n\nOccurred while formatting bytes. Double check the inputs:",
      "\n    bytes:",
      bytes,
      "\n    decimals:",
      decimals,
      "\n    binary:",
      binary
    );
  }
};

/**
 * Returns all files in a directory (recursive).
 * @since v2.1.0
 * @param {string} directoryPath - path to the directory containing the files
 * @returns {Promise<File[]>} all files in the directory and subdirectories
 */
const getFiles = async (directoryPath) => {
  try {
    const entries = await readdir(directoryPath, { withFileTypes: true });

    const files = entries
      .filter((file) => !file.isDirectory())
      .map(async ({ name }) => {
        const path = resolve(directoryPath, name);
        const { size } = await stat(path);
        return { name, path, size };
      });

    const directories = entries.filter((folder) => folder.isDirectory());
    for (const directory of directories) {
      // recursive calls for subdirectories
      const subdirectoryFiles = await getFiles(resolve(directoryPath, directory.name));
      files.push(...subdirectoryFiles);
    }

    return Promise.all(files);
  } catch (err) {
    if (err.code === "ENOENT") {
      help("Error: Could not find build at specified path:\n   ", directoryPath);
    } else {
      help(err, "\n\nOccurred while finding build files.", "Double check the file path:\n   ", directoryPath);
    }
  }
};

/**
 * Filters files by file type. Use {@link getFiles} to retrieve your build files.
 * @since v2.2.0
 * @param {File[]} files - files to filter
 * @param {string} type - file type, e.g. "js", "tsx", etc.
 * @returns {File[]} files filtered by file type
 */
const filterFilesByType = (files, type) => files.filter((file) => new RegExp(`.${type}$`, "i").test(file.name));

/**
 * Compresses a file using gzip and returns the size (no write)
 * @since v3.0.0
 * @param {string} filePath - path of the file to compress
 * @returns {Promise<number>} file size compressed using gzip with the default [zlib]{@link https://nodejs.org/api/zlib.html#class-options} options
 */
const getFileSizeGzip = (filePath) =>
  readFile(filePath)
    .then(compressGzip)
    .then((output) => output.length)
    .catch((err) =>
      help(err, "\n\nOccurred while getting gzipped file size.", "Double check the file path:\n   ", filePath)
    );

/**
 * Compresses a file using brotli and returns the size (no write)
 * @since v3.0.0
 * @param {string} filePath - path of the file to compress
 * @returns {Promise<number>} file size compressed using brotli with the default [zlib]{@link https://nodejs.org/api/zlib.html#brotli-constants} options
 */
const getFileSizeBrotli = (filePath) =>
  readFile(filePath)
    .then(compressBrotli)
    .then((output) => output.length)
    .catch((err) =>
      help(err, "\n\nOccurred while getting brotli compressed file size.", "Double check the file path:\n   ", filePath)
    );

/**
 * Provides performance information from an applications's production build
 * @param {string} buildPath 
 * @param {string} sampleName 
 * @returns {object} performance information 
 */
const getPerformanceInfo = async (buildPath, sampleName) => {
  try {
    return await browserPerformanceTest(buildPath, sampleName);
  } catch (err) {
    help(
      err,
      "\n\nOccurred while getting performance info.",
      "Double check the inputs:",
      "\n    build path:",
      resolve(buildPath)
    );
  }  
}

/**
 * Provides sizes for an application's production build.
 * @param {string} buildPath - path to the build directory
 * @param {string} [bundleFileType="js"] - type of bundle files, e.g. "js", "css", etc.
 * @returns {Promise<BuildSizes>} build sizes
 */
const getBuildSizes = async (buildPath, bundleFileType = "js") => {
  try {
    const build = resolve(process.cwd(), buildPath);
    const buildFiles = await getFiles(build);
    const filteredBuildFiles = filterFilesByType(buildFiles, bundleFileType);

    // the file with the largest size by type
    const mainBundleFile = filteredBuildFiles.length
      ? filteredBuildFiles.reduce((max, file) => (max.size > file.size ? max : file))
      : null;

    // the largest file size by type
    const mainBundleSize = mainBundleFile ? mainBundleFile.size : 0;
    const mainBundleName = mainBundleFile ? mainBundleFile.name : "Not found";

    // main bundle size compressed using gzip and brotli
    const mainBundleSizeGzip = mainBundleFile ? await getFileSizeGzip(mainBundleFile.path) : 0;
    const mainBundleSizeBrotli = mainBundleFile ? await getFileSizeBrotli(mainBundleFile.path) : 0;

    // sum of all file sizes
    const buildSize = buildFiles.reduce((count, file) => count + file.size, 0);

    const buildFileCount = buildFiles.length;

    return {
      mainBundleName,
      mainBundleSize,
      mainBundleSizeGzip,
      mainBundleSizeBrotli,
      buildSize,
      buildFileCount
    };
  } catch (err) {
    help(
      err,
      "\n\nOccurred while getting build sizes.",
      "Double check the inputs:",
      "\n    build path:",
      resolve(buildPath),
      "\n    bundle filetype:",
      bundleFileType
    );
  }
};

/**
 * Saves the build sizes from {@link getBuildSizes} to a CSV file. Useful for tracking sizes over time.
 * @since v3.0.0
 * @param {BuildSizes} buildSizes - build sizes that will be saved to CSV
 * @param {string} outputPath - the path to the output file, e.g. data/build-sizes.csv
 */
const saveBuildSizes = async (buildSizes, outputPath) => {
  try {
    const outfile = resolve(outputPath);
    const version = JSON.parse(await readFile("package.json", "utf8")).version;

    const timestamp = new Intl.DateTimeFormat("default", {
      dateStyle: "short",
      timeStyle: "long"
    })
      .format(Date.now())
      .replace(",", " at");

    const buildSizeKeys = [];
    const buildSizeValues = [];

    for (const [key, value] of Object.entries(buildSizes)) {
      buildSizeKeys.push(key);
      // all size properties need to have "size" in the name
      // or else they won't be converted from byte to megabyte
      buildSizeValues.push(/size/i.test(key) ? (value / 1024 ** 2).toFixed(2) : value);
    }

    // convert build-sizes output into csv header and row
    const header = ["Version", "Timestamp", ...buildSizeKeys, "(File sizes in megabytes)"].join(",").concat("\n");

    const row = [version, timestamp, ...buildSizeValues].join(",").concat("\n");

    try {
      // write csv header if outfile doesn't exist
      await writeFile(outfile, header, { flag: "wx" });
    } catch (err) {
      // don't throw error if outfile does exists
      if (err.code !== "EEXIST") {
        help(err, "\n\nOccurred while saving build sizes.", "Double check the output path:\n   ", resolve(outputPath));
      }
    }
    // append build size info to csv
    await appendFile(outfile, row);
  } catch (err) {
    if (err.code === "ENOENT" && err.path === "package.json") {
      help(
        "Error saving build sizes to CSV.",
        "I must be called from the same directory as package.json to get the project version number.",
        "I recommended adding me as an NPM script so I can be called anywhere in the project."
      );
    }
  }
};

/**
 * Prints help message to stderr, as well as any included parameters. Exits with code 1
 * @private
 * @since v3.0.0
 * @param  {...any} messages - info for stderr
 */
function help(...messages) {
  messages && console.error(...messages);
  console.error(
    "\nAdd the -h or --help flag for usage information when on the CLI.\n\nCheck out the documentation when using the exported functions:\nhttps://benelan.github.io/build-sizes/global.html\n"
  );
  process.exit(1);
}

/**
 * Important information about a file.
 * @typedef {Object} File
 * @property {string} name - file name with type
 * @property {string} path - absolute file path
 * @property {string} size - uncompressed file size
 * @see {@link getFiles}
 * @see {@link getFileSizeBrotli}
 * @see {@link getFileSizeGzip}
 * @see {@link filterFilesByType}
 */

/**
 * Information about a project's build sizes, primarily used for optimization.
 * @typedef {Object} BuildSizes
 * @property {string} mainBundleName - name of the largest bundle size by type
 * @property {number} mainBundleSize - size in bytes of the largest bundle file by type
 * @property {number} mainBundleSizeGzip - size in bytes of the main bundle file compressed with gzip
 * @property {number} mainBundleSizeBrotli - size in bytes of the main bundle file  compressed with brotli
 * @property {number} buildSize - size in bytes of all files in the build directory
 * @property {number} buildFileCount - count of all files in the build directory
 * @see {@link getBuildSizes}
 * @see {@link saveBuildSizes}
 */

module.exports = {
  getBuildSizes,
  saveBuildSizes,
  formatBytes,
  getFiles,
  getFileSizeGzip,
  getFileSizeBrotli,
  filterFilesByType
};

/*********** CLI ONLY CODE ************/
if (require.main === module) {
  const FLAG_INFO = {
    binary: {
      description: "Convert bytes to human readable format in base 2 instead of base 10",
      boolean: true
    },
    decimals: {
      description: "Number of decimal places for rounding bytes to a human readable format",
      default: 2
    },
    filetype: {
      description: "Filetype of the main bundle",
      default: "js"
    },
    outfile: {
      description: "Path to a file for saving build sizes as CSV data"
    },
    path: {
      description: "Path to the build directory (also available as argument)",
      required: true
    },
    runtime: {
      description: "Include a snapshot of runtime performance information"
    }
  };

  let loadingInterval; // loading animation interval

  (async () => {
    try {
      toggleLoadingAnimation();
      const args = process.argv.splice(2);
      // if requested, provide help and exit asap
      if (!args.length || args.includes("-h") || args.includes("--help")) {
        help(getUsageMessage());
      }
      // parse CLI arguments for option flags
      const options = parseOptions(args);

      // path can be the first cli argument or an option
      const path = !args[0].startsWith("-") ? args[0] : options["p"] || options["path"];

      if (!path) help("Error: The path to the build directory is required.");

      // set options parsed by flag, otherwise use defaults
      const type = options["f"] || options["filetype"] || FLAG_INFO["filetype"].default;
      const decimals = options["d"] || options["decimals"] || FLAG_INFO["decimals"].default;
      const binary = options["b"] || options["binary"] || FLAG_INFO["binary"].default;
      const outfile = options["o"] || options["outfile"]; // no default
      const runtime = options["r"] || options["runtime"]; // no default

      const buildSizes = await getBuildSizes(path, type);

      const line = "-".repeat(title.length);
      const bundle = `Main ${type.toUpperCase()} bundle`;      

      if(runtime) {
        const performanceInfo = await getPerformanceInfo(path, buildSizes.mainBundleName);

        // log sizes to console
        const title = "|> Application Performance <|";
        
        console.log(
          `\n${line}\n${title}\n${line}`,
          `\n --> bundle name:`,
          performanceInfo.sampleName,
          `\n --> load time (ms):`,
          performanceInfo.elapsedRuntimeMS,
          `\n --> script runtime (ms):`,
          performanceInfo.totalScriptTimeMS,
          `\n --> total JS requests:`,
          performanceInfo.totalJSRequests,
          `\n --> app load size:`,
          formatBytes(performanceInfo.pageTotalBytes, decimals, binary),
          `\n --> jsheap size:`,
          formatBytes(performanceInfo.JSHeapUsedSizeBytes, decimals, binary),
          `\n${line}\n`
        );
      }

      // save build sizes if outfile is provided
      if (outfile) saveBuildSizes(buildSizes, outfile);

      const { mainBundleName, mainBundleSize, mainBundleSizeGzip, mainBundleSizeBrotli, buildSize, buildFileCount } =
        buildSizes;

      // remove loading animation
      toggleLoadingAnimation();

      // underlines cli text using ansi codes
      const underline = (text) => `\x1b[4m${text}\x1b[0m`;

      // log sizes to console
      const title = "|> Application Build Sizes <|";

      console.log(
        `\n${line}\n${title}\n${line}`,
        `\n${underline("Build")}`,
        "\n --> file count:",
        buildFileCount,
        "\n --> size:",
        formatBytes(buildSize, decimals, binary),
        `\n${line}`,
        `\n${underline(bundle)}`,
        `\n --> name:`,
        mainBundleName,
        `\n --> size:`,
        formatBytes(mainBundleSize, decimals, binary),
        `\n --> gzip size:`,
        formatBytes(mainBundleSizeGzip, decimals, binary),
        `\n --> brotli size:`,
        formatBytes(mainBundleSizeBrotli, decimals, binary),
        `\n${line}\n`
      );
    } catch (err) {
      help(err);
    }
  })();

  /**
   * Parses CLI arguments for option flags
   * @param {Array<string>} args - CLI arguments from node
   * @returns {Object.<string>} Dictionary of options and their corresponding values
   */
  function parseOptions(args) {
    const options = {};
    args.forEach((arg) => {
      if (arg.startsWith("-")) {
        const option = arg.split("=");
        // remove all leading dashes
        const flag = option[0].replace(/^-*/, "");
        // if there is no value then it is treated as a boolean flag
        // this could use some error handling eventually
        const value = option.length > 1 ? option[1] : true;
        options[flag] = value;
      }
    });
    return options;
  }

  /**
   * Uses ANSI Codes to creates an animation interval on the first run.
   * Clears the interval on any subsequent executions.
   * @private
   * @since v3.1.0
   */
  function toggleLoadingAnimation() {
    if (!loadingInterval) {
      // clear interval for all exit types
      [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((event) => {
        process.once(event, toggleLoadingAnimation);
      });
      // hide cursor
      process.stdout.write("\u001B[?25l\r");
      let count = 0;
      loadingInterval = setInterval(() => {
        if (count % 11 === 0)
          // delete line, send cursor back to start, add emoji
          process.stdout.write(`\u001B[2K\r${["🔨 ", "📏 "][count % 2]}`);
        // add the ... animation
        else process.stdout.write(".");
        count += 1;
      }, 100);
    } else {
      clearInterval(loadingInterval);
      // show cursor and delete loading icons
      process.stdout.write(`\u001B[2K\r\u001B[?25h`);
    }
  }

  /**
   * @private
   * @since v3.0.0
   * @returns CLI help message
   * */
  function getUsageMessage() {
    // parse options help message from FLAG_INFO object
    const req = (flag) => (FLAG_INFO[flag].required ? "[required]" : "");
    const bool = (flag) => (FLAG_INFO[flag].boolean ? "[boolean]" : "");
    const def = (flag) => (FLAG_INFO[flag].default ? `(default is ${FLAG_INFO[flag].default})` : "");

    // format the option info
    const options = Object.keys(FLAG_INFO)
      .map(
        (f) =>
          `  -${f.charAt(0)}, --${f} ${req(f)} ${bool(f)}
     ${FLAG_INFO[f].description} ${def(f)}`
      )
      .join("\n\n");

    return `A small script that provides build sizes to assist with optimization

Usage: build-sizes <path> [options]

Repository
  https://github.com/Esri/jsapi-resources/tree/master/.github/scripts

Arguments
  path [required]
     Path to the build directory

Options
${options}

Examples
  # simplest usage with sane defaults
  node build-size.js dist

  # size of the largest css file with tweaked the number formatting
  node build-size.js dist --filetype=css --binary --decimals=1

  # same as above, but use a flag for path when it's not the first argument
  node build-size.js -f=css -b -d=1 -p=dist

  # get performance information in addition to build size
  node build-size.js dist -r

  # save the build sizes to a csv
  node build-size.js dist --outfile=metrics.csv`;
  }
}
