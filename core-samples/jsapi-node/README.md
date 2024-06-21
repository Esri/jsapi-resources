# ArcGIS Maps SDK for JavaScript in Node.js

Integrating Node.js with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with native ES modules or by transpiling to CommonJS (CJS). This sample contains examples of both approaches.

---
## Known Issues
 
* Using the SDK's [projection engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-projection.html) in Node.js requires transpiling to CJS and using a local copy of the SDK's assets. This sample uses rollup for that step.
* If you are getting the error `ReferenceError: crypto is not defined` and you are using Node 18, use the `--experimental-global-webcrypto` flag.
* If you are getting the error `TypeError: Cannot read properties of undefined (reading 'bind')`, try upgrading to Node 18.19+ or use the `--experimental-fetch` flag, for example: `node --experimental-fetch test-request.js` or `node --experimental-fetch test-webmap.js`.

---

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://download-directory.github.io?url=https://github.com/Esri/jsapi-resources/tree/main/core-samples/jsapi-node/))** 📁

Make sure you are running Node 18.19.1 or greater: `node -v`.

To run a test app, execute these commands in a terminal window:
1. `npm install` - install the modules
2. `npm run build` - run the build script
3. `node test-projection.js` - run the app and the output will be written to the terminal window.

The source files are in the `/src` directory. Running the build command transpiles the files to CJS and outputs them in the  `/public` directory. Only `projection.js` requires transpiling because it uses the SDK's projection engine. The `.mjs` files can be run natively, e.g. `node ./src/request.mjs`.

## Working with assets

For most local builds, the API's assets are pulled from the ArcGIS CDN at runtime and there is no need for additional configuration. However, when working with certain modules, Node.js may require configuring the API to manage the assets locally. The assets include images, web workers, web assembly (.wasm) and localization files. Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) so that the assets are correctly resolved, for example:

```js
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root
```

An example can be found in [`projection.js`](https://github.com/Esri/jsapi-resources/tree/main/core-samples/jsapi-node/src/projection.js#L6) and in [test-webmap.js](https://github.com/Esri/jsapi-resources/tree/main/core-samples/jsapi-node/test-webmap.js#L4-L5).

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/#api) Guide topic in the SDK.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```
