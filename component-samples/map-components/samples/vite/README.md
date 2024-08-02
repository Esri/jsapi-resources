# Map components Vite sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-component-sample-vite.zip)** 📁

This project showcases how to integrate the map components using Vite.

## Get started

The project was created using [`npm create vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) with the [vanilla JavaScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vanilla).

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

## Integrating Map Components
There are two primary approaches to integrating the ArcGIS map components into your Vite project. Each approach has its own advantages, and you can choose the one that best fits your project's needs.

### Lazy Loading ESM
In this approach, the map components are lazy-loaded to optimize the initial load time. This can help improve the performance of your application by loading components only when they are needed.

```
// main.js
import "./styles.css";
// Lazy loading ESM
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

const mapElement = document.querySelector('arcgis-map');
mapElement.addEventListener('arcgisViewReadyChange', event => { 
  console.log('MapView ready', event);
});
```

### Pure ESM
In this approach, the map components are directly imported without lazy loading. This approach is straightforward and ensures that all components are available immediately when the script is executed.

```
// main.js
  import "./styles.css";

// Pure ESM
  import "@arcgis/map-components/dist/components/arcgis-map";
  import "@arcgis/map-components/dist/components/arcgis-legend";
  import "@arcgis/map-components/dist/components/arcgis-search";
  
  const mapElement = document.querySelector('arcgis-map');
  mapElement.addEventListener('arcgisViewReadyChange', event => {
    console.log('MapView ready', event);
  });
```