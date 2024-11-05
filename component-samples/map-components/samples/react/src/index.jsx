import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArcgisMap
      itemId="d5dda743788a4b0688fe48f43ae7beb9"
      onArcgisViewReadyChange={(event) => {
        console.log("MapView ready", event);
      }}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  </React.StrictMode>
);
