[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](http://github.com/badges/stability-badges)

# arcgis-js-api build tools (Deprecated)

**Deprecation Notice**: The [arcgis-js-api](https://www.npmjs.com/package/arcgis-js-api) npm package has been deprecated at 4.29 and will be retired at 4.31. If you are building a new application, we recommend using the [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules, here are [sample applications](https://github.com/Esri/jsapi-resources/tree/master/esm-samples) for getting started.

These are example local build configurations for Dojo and Requirejs when using the [arcgis-js-api (AMD)](https://www.npmjs.com/package/arcgis-js-api) npm package.

## Dojo
If you want to build your application using Dojo, it is recommended to use [grunt-dojo](https://github.com/phated/grunt-dojo) and the included [build.profile](dojo/build.profile.js).

The demo Dojo application can be found [here](dojo);

## RequireJS
You can use [RequireJS](https://requirejs.org/) to optimize the application. To get a fully optimized build with RequireJS, you will need to add some files manually to the build as needed. 
