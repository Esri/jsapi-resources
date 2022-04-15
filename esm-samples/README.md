# @arcgis/core (ES modules)

The sample projects in this directory demonstrate using [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with various frameworks, module bundlers and build tools. `@arcgis/core` is installed using NPM, and is intended for use in local builds that you host.

### Get Started

Run `npm install` in a project directory and then start adding ArcGIS API for JavaScript functionality.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.


### Bundle size

Bundle size is dependant on multiple factors and will vary depending on framework, module bundler, transpiling and related configurations. The compile process can output several hundred or more bundles on-disk due to using dynamic imports. At runtime, your application will typically only load a portion of the bundles depending on the `@arcgis/core` functionality used. The functionality used can also affect the size of largest bundle. 

### Performance metrics

These performance indicators will vary depending on the device or virtual machine that runs the script. The calculations are dependant on many hardware and software factors including CPU load, memory usage and internet speed during the time window that the script is running.

### TypeScript

For TypeScript users, the type definitions are included with the API. There is no need for a separate install.
