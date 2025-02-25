import "./style.css";

import { ScatterPlotModel } from "@arcgis/charts-model";
import { createFeatureLayer } from "./create-feature-layer";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// Define custom elements in the browser, and load the assets from the CDN
defineCalciteElements();
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });

// Function to initialize the scatterplot.
async function initScatterplot() {
  const layer = await createFeatureLayer(
    "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0",
  );

  const scatterplotElement = document.getElementById("scatterplot");

  // Create a new ScatterPlotModel and set the x and y axis fields.
  const scatterplotModel = new ScatterPlotModel();
  await scatterplotModel.setup({ layer });

  await scatterplotModel.setXAxisField("Ward");
  await scatterplotModel.setYAxisField("Beat");

  // Set the scatterplot element's layer and model properties.
  const config = scatterplotModel.getConfig();

  scatterplotElement.layer = layer;
  scatterplotElement.model = config;
}

// Call initScatterplot() function to render the chart.
initScatterplot();
