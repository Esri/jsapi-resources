# ArcGIS Maps SDK for JavaScript in Node.js

Integrating Node.js with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by creating the app with native ES modules.

## Known Issues

- As of version 4.33, when using projection operators in native Node.js applications, the associated assets (e.g., .wasm files) are now served via the ArcGIS CDN by default. This is similar to how other default SDK assets are hosted. Additionally, it is no longer necessary to transpile to CommonJS (CJS). If you need to host the SDK's assets locally, you can serve them from your web server and reference them in your application. For example: esriConfig.assetsPath = "https://mywebsite.com/assets"; This breaking change includes the [projectOperator](https://developers.arcgis.com/javascript/latest/references/core/geometry/operators/projectOperator/), [shapePreservingProjectOperator](https://developers.arcgis.com/javascript/latest/references/core/geometry/operators/shapePreservingProjectOperator/), [geographicTransformationUtils](https://developers.arcgis.com/javascript/latest/references/core/geometry/operators/support/geographicTransformationUtils/) as well as the geodetic and geodesic operators, and the legacy [projection](https://developers.arcgis.com/javascript/latest/references/core/geometry/projection/) module.

---

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/js-maps-sdk-node.zip)** 📁

Make sure you are running Node 22.21.0 or greater: `node -v`.

To run a test app, execute these commands in a terminal window. No compiling or bundling is necessary.

1. `npm install` - install the `@arcgis/core` package. You do not need to build the project files.
2. `node projection.js` - run the app and the output will be written to the terminal window.

## Working with assets

For most local builds, the API's assets are pulled from the ArcGIS CDN at runtime and there is no need for additional configuration. However, when working with certain modules, Node.js may require configuring the API to manage the assets locally. The assets include images, web workers, web assembly (.wasm) and localization files. Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/references/core/config/#assetsPath) so that the assets are correctly resolved. They will need to be hosted on a web server, for example:

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "https://mywebsite.com/assets";
```

For more information on copying assets, see the [Copy and point to local assets](https://developers.arcgis.com/javascript/latest/working-with-assets/#copy-and-point-to-local-assets) guide topic.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/references/core/identity/IdentityManager/) using [`config.request`](https://developers.arcgis.com/javascript/latest/references/core/config/#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```
