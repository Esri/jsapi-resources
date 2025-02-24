import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements();
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });

createApp(App).mount("#app");
