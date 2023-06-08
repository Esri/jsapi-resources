# ArcGIS Maps SDK for JavaScript in Node.js

Integrating Node.js with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with [native ES modules in a supported Node version](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html) or by transpiling to CommonJS. This sample contains examples of both approaches.

---
## Known Issues

* A note about `fetch` - The Maps SDK uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) internally. To accommodate this, use Node 18+, or with earlier versions use the `--experimental-fetch` flag, for example: `node --experimental-fetch test-request.js` or `node --experimental-fetch test-webmap.mjs`. For more information see the [Node.js 18 release notes](https://nodejs.org/en/blog/announcements/v18-release-announce#fetch-experimental).
---

## Get Started

To run a test app, execute these commands in a terminal window:
1. `npm install` - install the modules
2. `npm run build` - run the build script
3. `node test-projection.js` - run the app and the output will be written to the terminal window.

## Working with assets

For most local builds, the API's assets are pulled from the ArcGIS CDN at runtime and there is no need for additional configuration. However, when working with certain modules, Node.js may require configuring the API to manage the assets locally. The assets include images, web workers, web assembly and localization files. Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) so that the assets are correctly resolved, for example:

```js
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root
```

An example can be found in [`projection.js`](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/src/projection.js#L6) and in [test-webmap.js](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/test-webmap.js#L4-L5).

More information can be found in the SDKs [Working with assets](https://developers.arcgis.com/javascript/latest/es-modules/#working-with-assets) guide topic.

## Native ESM samples

You can find native ESM samples in the [/native-esm](./native-esm) folder. Use the pattern `node ./native-esm/webmap.mjs` to test the samples.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```
