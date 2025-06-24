import "./style.css";

// Import the the `arcgis-layer-list` and `arcgis-map` components
// from the `@arcgis/map-components` package.
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-map";

// Import the `calcite-navigation`, `calcite-navigation-logo`, and `calcite-shell` components
// from the `@esri/calcite-components` package.
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-shell";

// Get a reference to the arcgis-layer-list element.
const arcgisLayerList = document.querySelector("arcgis-layer-list");

// Set the listItemCreatedFunction to add a legend to each list item.
arcgisLayerList.listItemCreatedFunction = (event) => {
  const { item } = event;
  if (item.layer.type !== "group") {
    item.panel = {
      content: "legend",
    };
  }
};

// Get a reference to the arcgis-map element.
const viewElement = document.querySelector("arcgis-map");

// Wait for the map component to be ready before accessing its properties.
// You can use either the arcgisViewReadyChange event or the viewOnReady method.
// Since Vite does not support top-level async/await, the event approach is used here.
viewElement.addEventListener("arcgisViewReadyChange", () => {
  const { portalItem } = viewElement.map;

  // Get a reference to the calcite-navigation-logo element.
  const navigationLogo = document.querySelector("calcite-navigation-logo");

  // Set the navigationLogo's properties to the portalItem's title, snippet, and thumbnailUrl.
  navigationLogo.heading = portalItem.title;
  navigationLogo.description = portalItem.snippet;
  navigationLogo.thumbnail = portalItem.thumbnailUrl;

  // Find the accidental deaths layer in the `event.target.map.layers` collection.
  // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers
  const layer = viewElement.map.layers.find((layer) => layer.id === "Accidental_Deaths_8938");

  //  Modify the layer's popup template title.
  //  https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html
  layer.popupTemplate.title = "Accidental Deaths";
});
