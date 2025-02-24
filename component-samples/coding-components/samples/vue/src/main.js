import "./assets/main.css"; // App style

import { createApp } from "vue";
import App from "./App.vue";

// Individual imports for each component
import "@arcgis/coding-components/components/arcgis-arcade-editor";
import "@esri/calcite-components/components/calcite-scrim";

createApp(App).mount("#app");
