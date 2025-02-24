import React from "react";
import ReactDOM from "react-dom/client";
import Scatterplot from "./components/Scatterplot";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements();
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Scatterplot />
  </React.StrictMode>,
);
