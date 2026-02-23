// Optional: If you're loading secure web maps
// import { configureOAuth } from "./auth/configureOAuth.js";
// configureOAuth({
//   // Default portalUrl is ArcGIS Online
//   // Only set if using other portals
//   portalUrl: "YOUR_PORTAL_URL",
//   appId: "YOUR_APP_ID",
// });

// Individual imports for each Map, Chart and Calcite component
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/charts-components/components/arcgis-chart";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";

// Import modules from the SDK's core API
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";

const viewElement = document.querySelector("arcgis-map");
const calciteNavLogo = document.querySelector("calcite-navigation-logo");

viewElement?.addEventListener("arcgisViewReadyChange", () => {
  // Use metadata from the Web Map to populate the header
  const { title, description } = viewElement.map.portalItem;

  if (calciteNavLogo) {
    calciteNavLogo.heading = title === "" ? "A web map" : title;
    calciteNavLogo.description = description === "" ? "ArcGIS Maps SDK for JavaScript template" : description;
  }

  // Define a point geometry
  const point = new Point({
    longitude: -98.38,
    latitude: 38.34,
  });

  // Create an outline for the marker symbol
  const outline = new SimpleLineSymbol({
    color: "white",
    width: 2,
  });

  // Create a symbol for drawing the point
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

  // Add a graphic to demonstrate custom visualizations beyond Web Map content
  viewElement.graphics.add(pointGraphic);
});
