import "./style.css";

// Import the `arcgis-map` component from the `@arcgis/map-components` package.
import "@arcgis/map-components/components/arcgis-map";

// Import the `arcgis-charts-action-bar` and `arcgis-chart` components from the `@arcgis/charts-components` package.
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Get a reference to the `arcgis-map` and `arcgis-chart` elements
const viewElement = document.querySelector("arcgis-map");
const chartElement = document.querySelector("arcgis-chart");

// Wait for the view to be ready before accessing it
await viewElement.viewOnReady();

// Get a reference to the view from the `arcgis-map` element
const view = viewElement.view;

// Find the layer with the title "CollegeScorecard" in the map's layers
const layer = viewElement.map?.layers.find((layer) => {
  return layer.title === "CollegeScorecard";
});

// Wait for the layer to load before accessing its charts
await layer.load();

// Set the chart element's model to the first chart of the layer, and set the layer and view properties
chartElement.model = layer.charts[0];
chartElement.layer = layer;

// Set the chart element's view property to the view, and enable syncing of selections between the chart and layer view
chartElement.view = view;
chartElement.syncSelectionsBetweenChartAndLayerViewPolicy = "enabled";

// Listen for click events on the view, and perform a hit test to get the object ID of the clicked feature
// This along side of the `syncSelectionsBetweenChartAndLayerViewPolicy` property will allow for the chart to update its selection based on clicks in the view
viewElement.addEventListener("arcgisViewClick", async (event) => {
  const { results } = await viewElement.hitTest(event.detail, { include: [layer] });
  if (results?.length > 0) {
    const objectIds = results.map((r) => r.graphic.getObjectId());
    view.selectionManager.replace(layer, objectIds);
  }
});
