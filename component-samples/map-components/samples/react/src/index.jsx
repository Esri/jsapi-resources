import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <arcgis-map
      itemId="d5dda743788a4b0688fe48f43ae7beb9"
      onarcgisViewReadyChange={(event) => {
        console.log("MapView ready", event);
      }}
    >
      <arcgis-search position="top-right"></arcgis-search>
      <arcgis-legend position="bottom-left"></arcgis-legend>
    </arcgis-map>
  </StrictMode>,
);
