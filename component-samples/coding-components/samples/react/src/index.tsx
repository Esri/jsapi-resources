import React from "react";
import ReactDOM from "react-dom/client";

import ArcadeEditor from "./components/ArcadeEditor";

// Individual imports for each component used in this sample
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-scrim";

// Set the asset path for calcite components
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.6/assets");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArcadeEditor />
  </React.StrictMode>
);
