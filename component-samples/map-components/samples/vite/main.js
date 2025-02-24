import "./styles.css";

// Individual imports for each component
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";

const mapElement = document.querySelector("arcgis-map");
mapElement.addEventListener("arcgisViewReadyChange", (event) => {
  console.log("MapView ready", event);
});
