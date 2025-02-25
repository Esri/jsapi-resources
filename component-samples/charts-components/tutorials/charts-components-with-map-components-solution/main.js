import "./style.css";

// Import the `arcgis-map` component from the `@arcgis/map-components` package.
import "@arcgis/map-components/components/arcgis-map";

// Import the defineCustomElements functions from calcite-components and charts-components.
// Note: Charts components is in beta and individual loading is not yet available. Use lazy loading instead.
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// Use CDN hosted Calcite assets
defineCalciteElements();

// Use CDN hosted Charts assets
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });

// Get a reference to the arcgis-map, arcgis-chart, and arcgis-charts-action-bar elements
const mapElement = document.querySelector("arcgis-map");
const chartElement = document.querySelector("arcgis-chart");
const actionBarElement = document.querySelector("arcgis-charts-action-bar");

// Since we are using property values from the map component, we use the arcgisViewReadyChange event to determine when the map is ready.
mapElement.addEventListener("arcgisViewReadyChange", async (event) => {
  // Get the map and the view from the event target
  const { map, view } = event.target;

  // Get the layer from the map
  const featureLayer = map.layers.find((layer) => layer.title === "CollegeScorecard");
  await featureLayer.load();

  // Get the chart config from the layer
  const chartConfig = featureLayer.charts[0];

  // Set the layer property to the feature layer, and the model property to the chart config on the chart element
  chartElement.layer = featureLayer;
  chartElement.model = chartConfig;

  // Get the layer views from the view
  const featureLayerViews = view.layerViews;

  // Add an event listener to the chart element to listen to the selection complete event
  // This is used to sync up the selection on the chart with the map
  chartElement.addEventListener("arcgisSelectionComplete", (event) => {
    // Remove the previous highlighted features from the map
    map.highlightSelect?.remove();

    // Highlight the selected features on the map
    map.highlightSelect = featureLayerViews.items[0].highlight(event.detail.selectionData.selectionOIDs);
  });

  // Set the view of the chart element to the map view, to be used for the extent filter
  chartElement.view = view;

  // Add an event listener to the action bar element to listen to the default action select event
  actionBarElement.addEventListener("arcgisDefaultActionSelect", (event) => {
    // Get the actionId and actionActive from the event detail
    const { actionId, actionActive } = event.detail;
    if (actionId === "filterByExtent") {
      chartElement.filterByExtent = actionActive;
    }
  });
});

// Add an event listener to the `arcgisViewClick` event on the `arcgis-map` element.
// When user clicks on a feature on the map, the corresponding feature is highlighted on the chart.
mapElement.addEventListener("arcgisViewClick", (event) => {
  // Get the view from the event target
  const { view } = event.target;

  // Get the screen points from the event detail
  let screenPoints = event.detail.screenPoint;
  view.hitTest(screenPoints).then(getFeatures);

  // Get the features from the hitTest
  function getFeatures(response) {
    // Get the selected feature OID
    const selectedFeatureOID = response.results[0].graphic.attributes["ObjectId"];

    // Set the selection data on the chart element
    chartElement.selectionData = {
      selectionOIDs: [selectedFeatureOID],
    };
  }
});
