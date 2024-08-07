# Vue 3 + Vite

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/coding-components-sample-vue.zip)** 📁


This sample should help get you started developing with Vue 3 in Vite. The sample uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

***Note:*** The sample demonstrates the recommended pattern for loading ArcGIS Map Components by individually loading each component using the pure ESM approach.

### Loading All Components
To register all the components once, use the following approach:

```
// Replace the imports in main.js

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.8.5/assets" });
defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/4.30/assets" });
```
Recommended to use this ES modules (ESM) via the ArcGIS CDN way of importing only for testing and prototyping.

For more details on registering components, please refer to the [ArcGIS for JavaScript API documentation](https://developers.arcgis.com/javascript/latest/get-started-npm/#components).

