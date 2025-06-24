# @arcgis/core (ES modules)

The samples in this directory demonstrate using [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with various frameworks, module bundlers and build tools. `@arcgis/core` is installed using [npm](https://docs.npmjs.com/downloading-and-installing-packages-locally), and is intended for use in local builds that you host.

## Download

You can use these links to download individual samples:

- [Angular CLI](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-angular-cli.zip)
- [ArcGIS ESM CDN](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-esm-cdn.zip)
- [Custom workers](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-custom-workers.zip)
- [Custom UI](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-custom-ui.zip)
- [Deno](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-deno.zip)
- [esbuild (no framework)](https://esri.github.io/jsapi-resources/zips/core-sample-esbuild.zip)
- [Node.js](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-node.zip)
- [OAuth](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-oauth.zip)
- [React/Vite](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-react.zip)
- [Rollup.js (no framework)](https://esri.github.io/jsapi-resources/zips/core-sample-rollup.zip)
- [Vue.js/Vite](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-vue.zip)
- [Vite](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-vite.zip)
- [Webpack (no framework)](https://esri.github.io/jsapi-resources/zips/core-sample-webpack.zip)

## Get Started

Run `npm install` in a project directory and then start adding ArcGIS Maps SDK for JavaScript functionality.

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started/#npm) Guide topic in the SDK.

## TypeScript

For TypeScript users, the type definitions are included when you install `@arcgis/core`. There is no need for a separate install.

## Troubleshooting

Building applications locally involves understanding many interrelated pieces including frameworks, module bundlers, transpilers, dependency libraries and the ArcGIS Maps SDK for JavaScript. Refer to our [Troubleshooting issues with local builds](https://developers.arcgis.com/javascript/latest/troubleshooting/) guide topic for guidance on narrowing down the potential sources for issues.

### Bundle size and performance

For each release, we track certain metrics including bundle size and web application performance. These files can be found in the [/core-samples/.metrics](./.metrics/) directory.

<!-- You can read more about how we capture this information this [README](). -->

The performance metrics can be separated into two categories: initial application load and on-disk build output files.

The initial application load metrics are related to the browser fetching and processing all initial HTTP requests before any user interaction. In the metrics, we make a distinction between JavaScript file requests and service request data which includes map tiles and query data.

The on-disk build output metrics represent files created by the local build and written to disk. At runtime, your application only loads a portion of the bundles depending on which `@arcgis/core` modules are used in your project. The number and size of bundles is dependant on multiple factors and will vary based on framework, module bundler, transpiling and related configurations. The compile process can output several hundred or more bundles on-disk due to the ArcGIS JavaScript Maps SDK using dynamic imports.

The performance indicators will vary depending on the device or virtual machine, and they are best used for analyzing trends over time. They depend on many hardware and software factors including CPU load, memory usage and internet speed during the time window when they are captured. For example, the numbers posted in the `metrics` directory come from running a cloud-based GitHub action. It's very likely that the metrics will be different from when you capture metrics locally on your development machine in a headless environment, or directly in a browser developer console.
