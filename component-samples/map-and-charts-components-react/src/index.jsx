import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Core API import
import Graphic from "@arcgis/core/Graphic.js";

function App() {
  const handleViewReady = (event) => {
    const viewElement = event.target;

    const point = {
      type: "point",
      longitude: -118.38,
      latitude: 33.34,
    };

    const markerSymbol = {
      type: "simple-marker",
      style: "triangle",
      size: 15,
      color: "red",
      outline: {
        color: "white",
        width: 2,
      },
    };

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol,
    });

    viewElement.graphics.add(pointGraphic);
  };

  return (
    <arcgis-map item-id="02b37471d5d84cacbebcccd785460e94" onarcgisViewReadyChange={handleViewReady}>
      <arcgis-chart layer-item-id="a1dcdab248cc4618b6426fd5b16106c0" chart-index="0" slot="bottom-right"></arcgis-chart>
      <arcgis-zoom slot="top-left" />
      <arcgis-search slot="top-right" />
      <arcgis-legend slot="bottom-left" />
    </arcgis-map>
  );
}

// Mount the app
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
