# Coding components Vite sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/coding-components-sample-vite.zip)** 📁

This project showcases how to integrate the coding components using vite.

## Get started

The project was created using [`yarn create vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) with the [vanilla JavaScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vanilla).

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

***Note:*** The sample demonstrates the recommended pattern for loading ArcGIS Map Components by individually loading each component using the pure ESM approach.

### Lazy Loading Components
To lazy load the components as needed and optimize initial load time, use the following approach:

```
// Replace the imports in main.js

 import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
 import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

//define custom elements in the browser, and load the assets from the CDN

 defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.8.5/assets" });
 defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/4.30/assets" });
```

Recommended to use this ES modules (ESM) via the ArcGIS CDN way of importing only for testing and prototyping.