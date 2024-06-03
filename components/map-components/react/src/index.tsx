import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
// Register custom elements
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ArcgisMap 
      itemId="d5dda743788a4b0688fe48f43ae7beb9" 
      onArcgisViewReadyChange={(event: any) => {
      console.log('MapView ready', event);
      }}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  </React.StrictMode>
);
