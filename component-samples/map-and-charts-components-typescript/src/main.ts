import "./style.css";

// Individual imports for each component
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Core API import
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";

const viewElement = document.querySelector("arcgis-map");

if (viewElement) {
  viewElement.addEventListener("arcgisViewReadyChange", () => {
    const point = new Point({
      longitude: -118.38,
      latitude: 33.34,
    });

    const outline = new SimpleLineSymbol({
      color: "white",
      width: 2,
    });

    const symbol = new SimpleMarkerSymbol({
      style: "triangle",
      size: 20,
      color: "red",
      outline,
    });

    // Create a graphic and add the geometry and symbol to it
    const pointGraphic = new Graphic({
      geometry: point,
      symbol,
    });

    viewElement.graphics.add(pointGraphic);
  });
}
