# Automation scripts

The scripts in this directory are used to analyze ESM sample build metrics.

## Build sizes

The [`build-size.js`](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/build-size.js) script provides sizes of production builds to assist with optimization of your app. The script has been published to an NPM packaged named [`build-sizes`](https://www.npmjs.com/package/build-sizes) so you can use it in your applications.

### Using the functions

The script exports functions, [documented here](https://benelan.github.io/build-sizes/global.html). Here is a small usage example:

```js
const { getBuildSizes, formatBytes } = require("./build-sizes.js");

(async () => {
  try {
    const { mainBundleSize, buildSize, buildFileCount } = await getBuildSizes("your-app/build-path");

    console.log(
      "Main bundle size: ",
      formatBytes(mainBundleSize),
      "\nBuild size: ",
      formatBytes(buildSize),
      "\nBuild file count: ",
      buildFileCount
    );
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
```

### Using the CLI

You can also run the script via the command line. When running from the CLI, the script requires the path (absolute or relative) to the build directory as an argument. The script will log the sizes to the console.

For example, your current working directory is `.github/scripts`. You want to analyze the build sizes of the [react sample](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-react), which is already built, and the build directory is named `dist`. To get the size, you can run:

```bash
node build-size.js ../../esm-samples/jsapi-react/dist
```

And the output to the console is:

```
-----------------------------
|> Application Build Sizes <|
-----------------------------
Build
 --> file count: 419
 --> size: 27.73 MB
-----------------------------
Main JS bundle
 --> name: main.6e924e92.js
 --> size: 1.70 MB
 --> gzip size: 462.92 KB
 --> brotli size: 375.26 KB
-----------------------------

```

There are also options that you can set with flags. For example, you can tell the script to run a browser performance analysis against the build using the `-r` argument:

```bash
node build-size.js ../../esm-samples/jsapi-react/build -r
```

Now, in addition to the build size information the output will also include the following:

```
-----------------------------
|> Application Performance <|
----------------------------- 
 --> bundle name: vendor.4332238d.js 
 --> load time (ms): 1630 
 --> script runtime (ms): 5733 
 --> app load size: 3.80 MB 
 --> jsheap size: 21.38 MB 
-----------------------------
```

Another example, you can specify a filetype for the largest bundle size (default is "js"):

```bash
node build-size.js ../../esm-samples/jsapi-react/build --filetype=css
```

Providing the `-h` or `--help` flag will log usage information to the console, copy/pasted here for convenience:

<details>

#### Arguments
**path [required]**
- Path to the build directory

#### Options

**-b, --binary  [boolean]**
- Convert bytes to human readable format in base 2 instead of base 10

**-d, --decimals**
- Number of decimal places for rounding bytes to a human readable format (default is 2)

**-f, --filetype**
- Filetype of the main bundle (default is js)

**-o, --outfile**
- Path to a file for saving build sizes as CSV data

**-p, --path [required]**
- Path to the build directory (also available as argument)

**-r, -runtime**
- Include a snapshot of runtime performance information

#### Examples

`node build-size.js dist`
- Simplest usage with sane defaults

`node build-size.js dist -r`
- Simplest usage with sane defaults and performance information

`node build-size.js dist --filetype=css --binary --decimals=1`
- Size of the largest css file with tweaked number formatting

`node build-size.js -f=css -b -d=1 -p=dist`
- Same as above, but use a flag for path when it's not the first argument

`node build-size.js dist --outfile=metrics.csv`
- Save the build sizes to a csv

</details>


### Running from NPM script

You can get the sizes after every build by utilizing a sample's NPM scripts. For example, you can add a couple NPM scripts to `esm-samples/jsapi-react/package.json`:

```diff
...
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
+   "build:sizes": "node ../../.github/scripts/build-size.js build",
+   "postbuild": "npm run build:sizes",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
...
```

After running `npm run build`, the sizes will be logged to the console. Note that the `buildPath` argument is the name of of the build directory, since the current working directory is the application's root when running an NPM script.

<!-- add "Headless performance" doc here when done  -->

## Analyze builds

The [`analyze-builds.js`](analyze-builds.js) script uses [`build-size.js`](build-size.js) and [`build-perf.js`](build-perf.js) to analyze ESM samples and creates a CSV containing the metrics. To run the script from the repo's root directory:

```bash
node .github/scripts/analyze-builds.js
```

### Sample info

The script requires some information about the samples. The [sample info is stored in a dictionary](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/analyze-builds.js#L12-L40) with the name of the sample's directory as the key. The dictionary value is an object with four properties.

| Property          | Description                                                           | Type    |
| ----------------- | --------------------------------------------------------------------- | ------- |
| name              | name of the sample in the CSV output                                  | string  |
| package           | package name of the main build tool or framework                      | string  |
| devDep (optional) | is the main package a devDependency (default is `false`)              | boolean |
| buildPath         | relative path from the sample's root directory to the build directory | string  |

For example, the angular sample is in the [`jsapi-angular-cli`](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-angular-cli) directory. You want to name the sample `Angular`, the main angular package is `@angular/core` (and it isn't a devDependency), and the build path from the sample's root directory is `dist`. The sample's info is:

```js
"jsapi-angular-cli": {
  name: "Angular",
  package: "@angular/core",
  buildPath: "dist"
}
```

If a sample does not have an info item it will be skipped, so you can fine tune which samples to analyze.

### Script output

The script will create a CSV file containing sample metrics in [`esm-samples/.metrics`](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/.metrics). The the output filename is the version of the ArcGIS JSAPI used in the samples. The CSV contains the name of the samples with the version of the main packages and the return properties from the [build sizes script](#build-sizes).

Bundle size is dependant on multiple factors and will vary based on framework, module bundler, transpiling and related configurations. The compile process can output several hundred or more bundles on-disk due to using dynamic imports. At runtime, your application will typically only load a portion of the bundles depending on the `@arcgis/core` functionality used. The functionality used can also affect the size of largest bundle. 

### Performance analysis

[`build-perf.js`](build-perf.js) is a helper library that uses [puppeteer](https://github.com/puppeteer/puppeteer) and [express](https://github.com/expressjs/express), which a lightweight web server to extract browser performance metrics.

The library provides the following information:
  * `elapsedRuntimeMS` - runtime in milliseconds derived from the applications last HTTP request.
  * `JSHeapUsedSizeBytes` - JSHeapUsedSize as reported by puppeteer.
  * `pageTotalBytes` - total number of bytes calculated using the http response object. 
  * `sampleName` - name of the sample or bundle.
  * `totalScriptTimeMS` - approximate internal runtime of the library script in milliseconds. Useful for comparing against the `elapsedRuntimeMS`. Should not be used as an indicator of application performance, it's most useful for troubleshooting differences between runtime and determining if the platform itself caused a slowdown.

These performance indicators will vary depending on the device or virtual machine that runs the script. They are best used for analysing trends over time, and they should be run on the same device in order to keep as many of the variables constant as possible. The calculations are dependant on many hardware and software factors including CPU load, memory usage and internet speed during the time window that the script is running. For example, the numbers you see using a GitHub action may be significantly different from when you run the scripts locally on your development machine.

### Running from GitHub Action

There is a GitHub Action [workflow set up](../workflows/analyze-builds.yml) to automatically analyze sample metrics. The workflow is [triggered by pull requests](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request) to `master`. The workflow will run if a pull request is created, synchronized, or reopened.

The workflow is required to pass in order to merge a pull request. The GitHub Docs have more information on [workflow run logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs). And, here is information on viewing the GitHub Action [status](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) if you are running the action on a repository that you own.

#### Workflow conditions

The workflow will only analyze the samples when the following conditions are met:

1. A `package.json` file is in the diff between the PR branch and `master` - [code](https://github.com/Esri/jsapi-resources/blob/master/.github/workflows/analyze-builds.yml#L22-L23)
2. All of the samples being analyzed have the same version of the ArcGIS JSAPI - [code](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/analyze-builds.js#L51-L69)
3. The most recent commit did not change any `esm-samples/.metrics/*.csv` files - [code](https://github.com/Esri/jsapi-resources/blob/master/.github/workflows/analyze-builds.yml#L24-L26)

The script takes around 8-12 minutes to analyze the samples, so the first condition prevents impacting pull requests unrelated to the ESM samples. The second condition makes sure the output metrics are accurate, since the CSV filename is the version of the ArcGIS JSAPI. The third ensures the script does not run recursively.

If the conditions are not met, the workflow will skip analyzing the samples and the pull request check will pass.

#### Workflow results

If the [conditions](#workflow-conditions) are met, the samples will be analyzed. Since the script takes a while, [auto merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) has been turned on in the repo.

The workflow will create the [script output](#script-output), and if there are any changes it pushes to the pull request branch and the pull request check passes. If there are any build errors the PR check will fail and you won't be able to merge until it is fixed. You can check the [run logs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) to see what happened if you are running the GitHub action on a repository that you own.
