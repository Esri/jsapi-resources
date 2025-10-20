import "./style.css";

// Import the `arcgis-map` component from the `@arcgis/map-components` package.
import "@arcgis/map-components/components/arcgis-map";

// Import the `arcgis-charts-action-bar` and `arcgis-chart` components from the `@arcgis/charts-components` package.
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Get a reference to the `arcgis-map` and `arcgis-chart` elements
const mapElement = document.querySelector("arcgis-map");
const chartElement = document.querySelector("arcgis-chart");

// Variable to hold the highlight select handle
let highlightSelect;

// Since we are using property values from the map component, we use the arcgisViewReadyChange event to determine when the map is ready.
mapElement.addEventListener("arcgisViewReadyChange", (event) => {
  // Get the map and the view from the event target
  const { map, view } = event.target;

  // Set the view of the chart element to the map view, to be used for the extent filter
  chartElement.view = view;

  // Add an event listener to the chart element to listen to the selection complete event
  // This is used to sync up the selection on the chart with the map
  chartElement.addEventListener("arcgisSelectionComplete", (event) => {
    // Remove the previous highlighted features from the map
    if (highlightSelect) {
      highlightSelect.remove();
    }
    // Highlight the selected features on the map
    highlightSelect = view.layerViews.items[0].highlight(event.detail.selectionData.selectionOIDs);
  });
});

// Add an event listener to the `arcgisViewClick` event on the `arcgis-map` element.
// When user clicks on a feature on the map, the corresponding feature is highlighted on the chart.
mapElement.addEventListener("arcgisViewClick", (event) => {
  // Get the view from the event target
  const { view } = event.target;

  // Get the screen points from the event detail
  const { screenPoint } = event.detail;
  view.hitTest(screenPoint).then(getFeatures);

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
