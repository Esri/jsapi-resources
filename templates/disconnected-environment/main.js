import "./style.css"; // CSS to style the app

import { setAssetPath as setCalciteAssetPath } from "@esri/calcite-components";
import { setAssetPath as setMapAssetPath } from "@arcgis/map-components";
import { setAssetPath as setCodingAssetPath } from "@arcgis/coding-components";
import { setAssetPath as setChartsAssetPath } from "@arcgis/charts-components";
import { setAssetPath as setCommonAssetPath } from "@arcgis/common-components";

// Individual imports for each component used
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/coding-components/components/arcgis-arcade-editor";
import "@esri/calcite-components/components/calcite-button";
import "@esri/calcite-components/components/calcite-scrim";

// Import the modules we need
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createModel } from "@arcgis/charts-components";

// Set assets paths
setCalciteAssetPath("./assets");
setMapAssetPath("./assets");
setCodingAssetPath("./assets");
setChartsAssetPath("./assets");
setCommonAssetPath("./common-components/assets");

// Get the Map element
const mapElement = document.querySelector("arcgis-map");
// Get the Arcade Editor element
const arcadeEditorElement = document.querySelector("arcgis-arcade-editor");
// Get the Calcite Button element
const calciteButtonElement = document.querySelector("calcite-button");
// Get the Chart element
const chartElement = document.querySelector("arcgis-chart");

// Create multiple graphics with polyline geometry.
const polylineGraphics = [
  new Graphic({
    attributes: { place: "Home", ObjectID: 1, value: 10 },
    geometry: {
      type: "polyline",
      paths: [
        [-111.3, 52.68],
        [-98, 49.5],
        [-93.94, 29.89],
      ],
      spatialReference: { wkid: 4326 },
    },
  }),
  new Graphic({
    attributes: { place: "Work", ObjectID: 2, value: 25 },
    geometry: {
      type: "polyline",
      paths: [
        [-120, 40],
        [-110, 42],
        [-100, 45],
      ],
      spatialReference: { wkid: 4326 },
    },
  }),
  new Graphic({
    attributes: { place: "Park", ObjectID: 3, value: 5 },
    geometry: {
      type: "polyline",
      paths: [
        [-105, 35],
        [-100, 37],
        [-95, 39],
      ],
      spatialReference: { wkid: 4326 },
    },
  }),
];

// Create a feature layer with the graphics
const polylineFeature = new FeatureLayer({
  source: polylineGraphics,
  title: "Example",
  fields: [
    { name: "ObjectID", alias: "ObjectID", type: "oid" },
    { name: "place", alias: "Place", type: "string" },
    { name: "value", alias: "Value", type: "double" },
  ],
  labelingInfo: [
    {
      symbol: {
        type: "text",
        font: { size: 12 },
      },
      labelPlacement: "above-center",
      labelExpressionInfo: {
        expression: arcadeEditorElement.script,
      },
    },
  ],
  objectIdField: "ObjectID",
  geometryType: "polyline",
});

// Tells Arcade editor to use the 'label' profile and provides the necessary data used as
// definition for the profile variables.
arcadeEditorElement.profile = {
  id: "labeling",
  disabledVariables: ["$layer", "$map", "$datastore", "$graph", "$userInput", "$view"],
  definitions: {
    $feature: polylineFeature,
  },
};

// Tells Arcade editor to use the following test data
arcadeEditorElement.testData = {
  profileVariableInstances: {
    $feature: polylineGraphics[0],
  },
};

// Set the label on the feature layer based on the arcade expression
calciteButtonElement.addEventListener("click", async () => {
  const testResult = await arcadeEditorElement.getTestResult();
  if (testResult.type === "text") {
    polylineFeature.labelingInfo[0].labelExpressionInfo.expression = arcadeEditorElement.script;
  }
});

// Hook up the feature layer to the map
// Use componentOnReady since there is no basemap to listen for the arcgisViewReadyChange event
mapElement.componentOnReady().then(() => {
  mapElement.map.add(polylineFeature);
});

// Everything has been loaded and assigned, we can remove scrim
document.getElementById("scrim").remove();

// Create a pie chart model with the polylineFeature layer as the data source and set the chart type as pie chart.
const chartModel = await createModel({
  layer: polylineFeature,
  chartType: "pieChart",
});

// Customize the chart by utilizing pie chart model properties.
chartModel.category = "place";
chartModel.numericFields = ["value"];
chartModel.displayType = "both";
chartModel.titleText = "Communte time by Place";

// Set the chart model on the chart element.
chartElement.model = chartModel;
