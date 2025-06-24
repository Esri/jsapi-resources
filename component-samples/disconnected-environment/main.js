import "./style.css"; // CSS to style the app

import esriConfig from "@arcgis/core/config.js";
import { setAssetPath as setCalciteAssetPath } from "@esri/calcite-components";
import { setAssetPath as setMapAssetPath } from "@arcgis/map-components";
import { setAssetPath as setCodingAssetPath } from "@arcgis/coding-components";

// Set assets path for @arcgis/core, @esri/calcite-components,
// @arcgis/map-components and @arcgis/coding-components
esriConfig.assetsPath = "./assets";
setCalciteAssetPath("./assets");
setMapAssetPath("./assets");
setCodingAssetPath("./assets");

// Optional:
// Point to your Enterprise /portal/apps/fonts directory
// esriConfig.fontsUrl = "https://<your-enterprise-portal>.com/portal/apps/fonts/";

// Individual imports for each component used
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-placement";
import "@arcgis/coding-components/components/arcgis-arcade-editor";
import "@esri/calcite-components/components/calcite-button";
import "@esri/calcite-components/components/calcite-scrim";

// Import the modules we need
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

// Get the Map element
const mapElement = document.querySelector("arcgis-map");
// Get the Arcade Editor element
const arcadeEditorElement = document.querySelector("arcgis-arcade-editor");
// Get the Calcite Button element
const calciteButtonElement = document.querySelector("calcite-button");

// Create a graphic with a point geometry
const polylineGraphic = new Graphic({
  attributes: {
    place: "home",
    ObjectID: 1,
  },
  geometry: {
    type: "polyline",
    paths: [
      [-111.3, 52.68],
      [-98, 49.5],
      [-93.94, 29.89],
    ],
    spatialReference: { wkid: 4326 },
  },
});

// Create a feature layer with the graphic
const polylineFeature = new FeatureLayer({
  source: [polylineGraphic],
  title: "Example",
  fields: [
    {
      name: "ObjectID",
      alias: "ObjectID",
      type: "oid",
    },
    {
      name: "place",
      alias: "place",
      type: "string",
    },
  ],
  labelingInfo: [
    // Set up label class
    {
      symbol: {
        type: "text",
        font: {
          size: 12,
        },
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
    $feature: polylineGraphic,
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
