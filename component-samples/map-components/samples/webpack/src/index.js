// Individual imports for each component
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";

// Core API import
import Graphic from "@arcgis/core/Graphic.js";

const viewElement = document.querySelector("arcgis-map");

viewElement.addEventListener("arcgisViewReadyChange", (event) => {
  // Define a point geometry
  const point = {
    type: "point",
    longitude: -118.38,
    latitude: 33.34,
  };

  // Create a symbol for drawing the point
  const markerSymbol = {
    type: "simple-marker",
    style: "triangle",
    size: 20,
    color: "red",
    outline: {
      color: "white",
      width: 2,
    },
  };

  // Create a graphic and add the geometry and symbol to it
  const pointGraphic = new Graphic({
    geometry: point,
    symbol: markerSymbol,
  });

  viewElement.graphics.add(pointGraphic);
});
