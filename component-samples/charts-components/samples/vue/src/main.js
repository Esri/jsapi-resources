import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements(window, { resourcesUrl: 'https://js.arcgis.com/calcite-components/2.13.2/assets' });
defineChartsElements(window, { resourcesUrl: 'https://js.arcgis.com/charts-components/4.31/assets' });

createApp(App).mount("#app");
