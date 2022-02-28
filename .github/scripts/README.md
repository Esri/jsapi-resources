# Automation scripts

The scripts in this directory are used to analyze ESM sample build metrics.

## Build sizes

The [`build-size.js`](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/build-size.js) provides sizes of production builds to assist with optimization. The script has been published to an NPM packaged named [`build-sizes`](https://www.npmjs.com/package/build-sizes) so you can use it in your applications.

### Using the functions

The script exports functions, [documented here](https://benelan.github.io/build-sizes/global.html). They are available as both CommonJS and ECMAScript modules. Here is a small usage example:

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

For example, your current working directory is `.github/scripts`. You want to analyze the build sizes of the [react sample](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-create-react-app), which is already built, and the build directory is named `build`. To get the size, you can run:

```bash
node build-size.js ../../esm-samples/jsapi-create-react-app/build
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

There are also options that you can provide with flags. For example, you can specify a filetype for the largest bundle size (default is "js"):

```bash
node build-size.js ../../esm-samples/jsapi-create-react-app/build --filetype=css
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

#### Examples

`node build-size.js dist`
- Simplest usage with sane defaults

`node build-size.js dist --filetype=css --binary --decimals=1`
- Size of the largest css file with tweaked number formatting

`node build-size.js -f=css -b -d=1 -p=dist`
- Same as above, but use a flag for path when it's not the first argument

`node build-size.js dist --outfile=metrics.csv`
- Save the build sizes to a csv

</details>


### Running from NPM script

You can get the sizes after every build by utilizing a sample's NPM scripts. For example, you can add a couple NPM scripts to `esm-samples/jsapi-create-react-app/package.json`:

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

The [`analyze-builds.js`](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/analyze-builds.js) script uses [`build-size.js`](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/build-size.js) <!-- and `headless-performance.js` --> to analyze ESM samples and creates a CSV containing the metrics. To run the script from the repo's root directory:

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

### Running from GitHub Action

There is a GitHub Action [workflow set up](https://github.com/Esri/jsapi-resources/blob/master/.github/workflows/analyze-builds.yml) to automatically analyze sample metrics. The workflow is [triggered by pull requests](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request) to `master`. The workflow will run if a pull request is created, synchronized, or reopened.

The logs for the workflow runs can be found [here](https://github.com/Esri/jsapi-resources/actions/workflows/analyze-builds.yml). The workflow is required to pass in order to merge a pull request. More info on pull request checks [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

#### Workflow conditions

The workflow will only analyze the samples when the following conditions are met:

1. A `package.json` file is in the diff between the PR branch and `master` - [code](https://github.com/Esri/jsapi-resources/blob/master/.github/workflows/analyze-builds.yml#L22-L23)
2. All of the samples being analyzed have the same version of the ArcGIS JSAPI - [code](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/analyze-builds.js#L51-L69)
3. The most recent commit did not change any `esm-samples/.metrics/*.csv` files - [code](https://github.com/Esri/jsapi-resources/blob/master/.github/workflows/analyze-builds.yml#L24-L26)

The script takes around 8-12 minutes to analyze the samples, so the first condition prevents impacting pull requests unrelated to the ESM samples. The second condition makes sure the output metrics are accurate, since the CSV filename is the version of the ArcGIS JSAPI. The third ensures the script does not run recursively.

If the conditions are not met, the workflow will skip analyzing the samples and the pull request check will pass.

#### Workflow results

If the [conditions](#workflow-conditions) are met, the samples will be analyzed. Since the script takes a while, [auto merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) has been turned on in the repo.

The workflow will create the [script output](#script-output), and if there are any changes, it pushes to the pull request branch and the pull request check passes. If there are any build errors the PR check will fail and you won't be able to merge until it is fixed. You can check the [logs](https://github.com/Esri/jsapi-resources/actions/workflows/analyze-builds.yml) to see what happened.
