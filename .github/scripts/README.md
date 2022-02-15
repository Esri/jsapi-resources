# Automation scripts

The scripts in this directory are used to analyze ESM samples build metrics.

## Build size

The `build-size.js` script exports a function which calculates build size for a sample. The function takes an object parameter with two properties, and returns an object with three properties.

#### Parameter properties

| Property   | Description                                                    | Type   |
| ---------- | -------------------------------------------------------------- | ------ |
| samplePath | relative path to the sample's root directory (default is $PWD) | string |
| buildPath  | relative path from samplePath to the sample's build directory  | string |

#### Return properties

| Property       | Description                                             | Type   |
| -------------- | ------------------------------------------------------- | ------ |
| mainBundleSize | size in megabytes of the largest JavaScript bundle file | number |
| buildSize      | size in megabytes of all files in the build directory   | number |
| fileCount      | count of all files in the build directory               | number |

### Running from CLI

You can also run the script via the command line. When running from the CLI, the [parameter property](#parameter-properties) `buildPath` is the first argument, and samplePath the second. The script will log the three [return properties](#return-properties) to the console when ran from the CLI.

For example, your current working directory is `.github/scripts`. You want to analyze the build size of the [react sample](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-create-react-app), which is already built and the build directory is named `build`. To get the size, you can run:

```bash
node build-size.js build ../../esm-samples/jsapi-create-react-app
```

And the output to the console is:

```
Main bundle size (MB): 1.70
On-disk size (MB): 27.77
On-disk files: 419
```

### Running from NPM script

You can analyze the size after every build by utilizing a sample's NPM scripts. For example, you can add a couple NPM scripts to the `esm-samples/jsapi-create-react-app/package.json` file:

```diff
...
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
+   "build:size": "node ../../.github/scripts/build-size.js build",
+   "postbuild": "npm run build:size",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
...
```

After running `npm run build`, the size will be logged to the console. Note that the `samplePath` argument is not required when running from the an NPM script, since it defaults to the current working directory.

## Analyze builds

The `analyze-builds.js` script uses `build-size.js` to analyze ESM samples and creates a CSV containing the metrics. To run the script from the repo's root directory:

```bash
node .github/scripts/analyze-builds.js
```

### Sample info

The script requires some information about the samples. The [sample info is stored in a dictionary](https://github.com/Esri/jsapi-resources/blob/master/.github/scripts/analyze-builds.js#L12-L40) with the name of the sample's directory as the key. The dictionary value is an object with four properties.

| Property          | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| name              | name of the sample in the CSV output                                  |
| package           | package name the main build tool or framework                         |
| devDep (optional) | true if the main package is a devDependency                           |
| buildPath         | relative path from the sample's root directory to the build directory |

For example, the angular sample is in the `jsapi-angular-cli` directory. You want to name the sample `Angular`, the main angular package is `@angular/core` (and it isn't a devDependency), and the build path from the sample's root directory is `dist`. The sample's info is:

```js
"jsapi-angular-cli": {
  name: "Angular",
  package: "@angular/core",
  buildPath: "dist"
}
```

If a sample does not have an info item it will be skipped, so you can fine tune which samples to analyze.

### Script output

The script will create a CSV file in [`esm-samples/.metrics`](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/.metrics) containing the sample metrics. The the output filename is the version of the ArcGIS JSAPI used in the samples. The CSV contains the name of the sample with the version of the main package and the [return properties](#return-properties) from the [build size script](#build-size).

### Running from GitHub Action

There is a GitHub Action [workflow set up](https://github.com/Esri/jsapi-resources/blob/master/.github/workflows/analyze-builds.yml) to automatically analyze sample metrics. The workflow is [triggered by pull requests](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request) to `master`. If a pull request is created, synchronized, or reopened, the workflow will run.

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

The workflow will create the [script output](#script-output), and if there are any changes, it pushes to the pull request branch.
