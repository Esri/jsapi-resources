import "./assets/main.css"; // App style

import { createApp } from "vue";
import App from "./App.vue";

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

// Individual imports for each component
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-scrim";

setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.6/assets");

createApp(App).mount('#app');
