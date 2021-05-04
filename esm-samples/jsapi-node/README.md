# ArcGIS API for JavaScript in Node.js

Integrating Node.js with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with [native ESM in a supported Node version](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html) or by transpiling to CommonJS. This sample contains examples of both approaches.

## Working with assets

When working with certain modules in ArcGIS API for JavaScript, Node.js may require configuring the APIs assets. The assets include images, web workers, web assembly and localization files. Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) so that the assets are correctly resolved, for example:

```js
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root
```

An example can be found in [`projection.js`](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/src/projection.js#L6).

## Polyfills

Because Node does not have a native `fetch` or `abort-controller`, you will need to load polyfills:

```js
require("cross-fetch/polyfill");
require("abort-controller/polyfill");
```

An example can be found in the [webmap.js](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/webmap.js#L4-L5) file.

## Native ESM samples

You can find native ESM samples in the [/native-esm](./native-esm) folder.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

To run a test app, execute these commands in a terminal window:
1. `npm i` - install the modules
2. `npm run build` - run the build script
3. `node test-projection.js` - run the app and the output will be written to the terminal window.
