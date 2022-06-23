# @arcgis/core (ES modules)

The sample projects in this directory demonstrate using [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with various frameworks, module bundlers and build tools. `@arcgis/core` is installed using [NPM](https://docs.npmjs.com/downloading-and-installing-packages-locally), and is intended for use in local builds that you host.

### Get Started

Run `npm install` in a project directory and then start adding ArcGIS API for JavaScript functionality.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.


### Bundle size and performance

For each release, we track certain metrics including bundle size and web application performance. These files can be found in the [/esm-samples/.metrics](./.metrics/) directory. You can read more about how we capture this information this [README](../.github/scripts/README.md).

Bundle size is dependant on multiple factors and will vary based on framework, module bundler, transpiling and related configurations, as well as the ArcGIS API for JavaScript functionality that has been implemented. The compile process can output several hundred or more bundles on-disk due to using dynamic imports. At runtime, your application will typically only load a portion of the bundles depending on the `@arcgis/core` functionality used. 

The performance indicators will vary depending on the device or virtual machine that runs the script. They are best used for analysing trends over time, and they should be run on the same device in order to keep as many of the variables constant as possible. The calculations are dependant on many hardware and software factors including CPU load, memory usage and internet speed during the time window that the script is running. For example, the numbers you see using a GitHub action may be significantly different from when you run the scripts locally on your development machine.

### TypeScript

For TypeScript users, the type definitions are included when you install the API. There is no need for a separate install.
