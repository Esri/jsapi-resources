import { useState } from "react";

// Optional: If you're loading secure web maps
// import { configureOAuth } from "./auth/configureOAuth";
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

// Import modules and types from the SDK's core API
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import type WebMap from "@arcgis/core/WebMap";

export function App(): React.JSX.Element {
  const [navHeading, setNavHeading] = useState("");
  const [navDescription, setNavDescription] = useState("");

  const handleViewReady = (event: CustomEvent): void => {
    const viewElement = event.target as HTMLArcgisMapElement;

    // Use metadata from the Web Map to populate the header
    const map = viewElement.map as WebMap;
    const portalItem = map.portalItem;
    const title = portalItem?.title ? portalItem.title : "A web map";
    const description = portalItem?.description ? portalItem.description : "ArcGIS Maps SDK for JavaScript template";

    setNavHeading(title);
    setNavDescription(description);

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
  };

  return (
    // The Shell component is used as a layout for this template
    <calcite-shell content-behind>
      <calcite-navigation slot="header">
        {/* Heading and description dynamically populated */}
        <calcite-navigation-logo
          heading={navHeading}
          description={navDescription}
          heading-level="1"
          slot="logo"
        ></calcite-navigation-logo>
      </calcite-navigation>
      {/* The Map component fits to the size of the parent element  */}
      {/* The basemap, extent, zoom and more are provided by the Web Map (item-id) */}
      <arcgis-map item-id="dd4b2f25487d4a37a45093ba6acd026d" onarcgisViewReadyChange={handleViewReady}>
        <arcgis-zoom slot="top-left" />
        <arcgis-search slot="top-right" />
        <arcgis-expand slot="bottom-left">
          <arcgis-legend></arcgis-legend>
        </arcgis-expand>
        {/*  A Feature Layer in the Web Map has an associated chart (layer-item-id) */}
        <arcgis-chart
          layer-item-id="b1717962dab247ad93eaca257b32fe02"
          chart-index="1"
          slot="bottom-right"
        ></arcgis-chart>
      </arcgis-map>
    </calcite-shell>
  );
}
