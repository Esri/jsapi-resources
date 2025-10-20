import "./style.css";

// Import the `arcgis-map` and `arcgis-placement` components from the `@arcgis/map-components` package.
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-placement";

// Import the `arcgis-charts-action-bar` and `arcgis-chart` components from the `@arcgis/charts-components` package.
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Get a reference to the arcgis-map, arcgis-chart, and arcgis-charts-action-bar elements
const mapElement = document.querySelector("arcgis-map");
const chartElement = document.querySelector("arcgis-chart");
const actionBarElement = document.querySelector("arcgis-charts-action-bar");

// Since we are using property values from the map component, we use the arcgisViewReadyChange event to determine when the map is ready.
mapElement.addEventListener("arcgisViewReadyChange", (event) => {
  // Get the map and the view from the event target
  const { map, view } = event.target;

  // Get the layer "CollegeScorecard" from the map
  const layer = map.layers.find((layer) => layer.title === "CollegeScorecard");

  // Set the layer on the chart element
  chartElement.layer = layer;

  // Set first existing chart model from the layer on the chart element
  chartElement.model = layer.charts[0];

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
