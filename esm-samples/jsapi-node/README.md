# ArcGIS API for JavaScript in Node

Integrating Node with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with [native ESM in a supported Node version](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html) or by transpiling to CommonJS.

```js
// rollup.config.js
{
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["src/request.js", "src/projection.js", "src/webmap.js"],
  output: {
    chunkFileNames: "chunks/[name].js",
    dir: "dist",
    format: "cjs"
  },
  external: ["whatwg-fetch"],
  plugins: [resolve(), commonjs()],
  preserveEntrySignatures: false
};
```

Because Node does not have a native `fetch`, you will need to load a polyfill.

```js
require("cross-fetch/polyfill");
```

You can find native ESM samples in the [native-esm folder](./native-esm).

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";

esriConfig.request.useIdentity = false;
```
