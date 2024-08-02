# Coding components Vite sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/coding-components-sample-vite.zip)** 📁

This project showcases how to integrate the coding components using vite.

## Get started

The project was created using [`yarn create vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) with the [vanilla JavaScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vanilla).

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

## Integrating Coding Components
There are two primary approaches to integrating the ArcGIS coding components into your Vite project. Each approach has its own advantages, and you can choose the one that best fits your project's needs.

### Lazy Loading ESM
In this approach, the coding components are lazy-loaded to optimize the initial load time. This can help improve the performance of your application by loading components only when they are needed.

```
// main.js
 import "./style.css"; // Arcade editor styles

 import { loadData } from "./load-data";

 import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
 import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

// // define custom elements in the browser, and load the assets from the CDN
 defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.8.5/assets" });
 defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/4.30/assets" });

```

### Pure ESM
In this approach, the coding and calcite components are directly imported without lazy loading. This approach is straightforward and ensures that all components are available immediately when the script is executed.

```
import { setArcgisAssetPath as setCodingComponentsAssetPath } from "@arcgis/coding-components/dist/components";
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
import "@esri/calcite-components/dist/components/calcite-scrim";

setCodingComponentsAssetPath("https://js.arcgis.com/coding-components/4.30/assets");
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.0/assets");
```