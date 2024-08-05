# Map components Vite sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-component-sample-vite.zip)** 📁

This project showcases how to integrate the map components using Vite.

## Get started

The project was created using [`npm create vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) with the [vanilla JavaScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vanilla).

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

***Note:*** The sample demonstrates the recommended pattern for loading ArcGIS Map Components by individually loading each component using the pure ESM approach.

### Lazy Loading Components
To lazy load the components as needed and optimize initial load time, use the following approach:

```
// Replace the imports in main.js

// Define custom elements in the browser to load all components
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

const mapElement = document.querySelector('arcgis-map');
mapElement.addEventListener('arcgisViewReadyChange', event => { 
  console.log('MapView ready', event);
});
```