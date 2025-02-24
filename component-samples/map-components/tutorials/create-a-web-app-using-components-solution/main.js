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

// Import the setAssetPath function from calcite-components.
// This function allows you to set the path to the calcite components assets.
import { setAssetPath } from "@esri/calcite-components";

// CDN hosted calcite components assets
setAssetPath("https://js.arcgis.com/calcite-components/3.0.3/assets");

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
const arcgisMap = document.querySelector("arcgis-map");

// Since we are using property values from the map component,
// we use the arcgisViewReadyChange event to determine when the map is ready.
arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  const { portalItem } = arcgisMap.map;

  // Get a reference to the calcite-navigation-logo element.
  const navigationLogo = document.querySelector("calcite-navigation-logo");

  // Set the navigationLogo's properties to the portalItem's title, snippet, and thumbnailUrl.
  navigationLogo.heading = portalItem.title;
  navigationLogo.description = portalItem.snippet;
  navigationLogo.thumbnail = portalItem.thumbnailUrl;

  // Find the accidental deaths layer in the `event.target.map.layers` collection.
  // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers
  const layer = arcgisMap.map.layers.find((layer) => layer.id === "Accidental_Deaths_8938");

  //  Modify the layer's popup template title.
  //  https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html
  layer.popupTemplate.title = "Accidental Deaths";
});
