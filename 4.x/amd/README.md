[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](http://github.com/badges/stability-badges)

# arcgis-js-api build tools (Deprecated)

**Deprecation Notice**: if you are planning on building a new application, we recommend using the [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules, here is a [sample application](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/webpack).

These are the recommended Dojo and Requirejs build configurations for using the [arcgis-js-api](https://github.com/Esri/arcgis-js-api) using npm.
You can read more about npm [here](https://www.npmjs.com/).

## Why
You would use the npm package of the ArcGIS Maps SDK for JavaScript if you wanted to create local builds of your application.

This can provide an improved debugging experience as you will know which module an error originates from.

## Dojo
If you want to build your application using Dojo, we recommend [grunt-dojo](https://github.com/phated/grunt-dojo) and the included [build.profile](dojo/build.profile.js).
The npm package of the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) is simply a minified version of the API.

The demo Dojo application can be found [here](dojo);

## RequireJS
You can use [RequireJS](https://requirejs.org/) to optimize the application. To get a fully optimized build with RequireJS, you will need to add some files manually to the build as needed. This requires a little more work, but yields good results.
