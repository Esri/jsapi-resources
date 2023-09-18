# ArcGIS Maps SDK for JavaScript in Node.js

Integrating Node.js with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with native ES modules or by transpiling ES modules to [CommonJS](https://rollupjs.org/configuration-options/#output-format). This sample contains examples of both approaches.

---
## Known Issues

* Using the SDK's [projection engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-projection.html) in Node.js requires both transpiling to CommonJS (CJS), and using a local copy of the SDK's assets.

---

## Get Started

To run a test app, execute these commands in a terminal window:
1. `npm install` - install the modules
2. `npm run build` - run the build script
3. `node test-projection.js` - run the app and the output will be written to the terminal window.
4. `node ./native-esm/webmap.mjs` - run one of the native ESM samples.

The source files are in the `/src` directory. Running the build command compiles the files to CJS and outputs them in the  `/public` directory. The [native ESM samples](./native-esm) are not transpiled and can be run as-is.

## Working with assets

For most local builds, the API's assets are pulled from the ArcGIS CDN at runtime and there is no need for additional configuration. However, when working with certain modules, Node.js may require configuring the API to manage the assets locally. The assets include images, web workers, web assembly (.wasm) and localization files. Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) so that the assets are correctly resolved, for example:

```js
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root
```

An example can be found in [`projection.js`](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/src/projection.js#L6) and in [test-webmap.js](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/test-webmap.js#L4-L5).

More information can be found in the SDKs [Working with assets](https://developers.arcgis.com/javascript/latest/es-modules/#working-with-assets) guide topic.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```
