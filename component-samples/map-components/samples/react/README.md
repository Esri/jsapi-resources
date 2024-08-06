# Map components React using Vite sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-component-sample-react.zip)** 📁

This repository showcases how to use map components with [React](https://react.dev/).

## Get started

The project was created using [`yarn create vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) with the [React template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react).

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

***Note:*** The sample demonstrates the recommended pattern for loading ArcGIS Map Components by individually loading each component using the pure ESM approach.

### Loading All Components
To lazy load the components as needed, use the following approach:

```
// Replace the component imports in main.js

// Define custom elements in the browser to load all components
// import { defineCustomElements } from "@arcgis/map-components/dist/loader";
// defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });
```
Recommended to use this ES modules (ESM) via the ArcGIS CDN way of importing only for testing and prototyping.

For more details on registering components, please refer to the [ArcGIS for JavaScript API documentation](https://developers.arcgis.com/javascript/latest/get-started-npm/#components).