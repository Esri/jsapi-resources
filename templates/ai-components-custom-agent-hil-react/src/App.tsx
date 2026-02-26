import "./index.css";

import React, { useState } from "react";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-expand";

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-button";

import "@arcgis/ai-components/components/arcgis-assistant";
import "@arcgis/ai-components/components/arcgis-assistant-agent";
import "@arcgis/ai-components/components/arcgis-assistant-navigation-agent";
import "@arcgis/ai-components/components/arcgis-assistant-data-exploration-agent";

import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

// Core API import
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";

import { ServiceMaintenanceAgent } from "./maintenanceAgent";

function App(): React.JSX.Element {
  const map = new WebMap({
    portalItem: {
      id: "394f946eac284ce0b5a93fdc194c5430",
    },
  });

  const [mapView, setMapView] = useState<MapView | null>(null);

  const handleViewReady = (event: CustomEvent): void => {
    const viewElement = event.target as ArcgisMap;
    const view = viewElement.view;
    setMapView(view);
  };

  return (
    <calcite-shell>
      <calcite-shell-panel slot="panel-end" width="l" id="assistant-panel">
        <calcite-panel>
          {mapView && (
            <arcgis-assistant
              reference-element="#main-map"
              heading="Road maintenance service requests"
              description="This map displays reported road maintenance issues in the city."
              entryMessage="Use the assistant to log new maintenance issues or explore existing service requests."
              suggestedPrompts={[
                "Go to the Palm Springs Convention Center",
                "The median road paint has faded. Should be repainted in the next maintenance cycle.",
                "There is a pothole about 3 feet wide and 6 inches deep at the corner of Tahquitz Canyon Way and Palm Canyon Drive.",
              ]}
              onarcgisSubmit={(event) => {
                console.log("arcgis submit: ", event.detail);
              }}
            >
              <arcgis-assistant-navigation-agent></arcgis-assistant-navigation-agent>
              <arcgis-assistant-data-exploration-agent></arcgis-assistant-data-exploration-agent>
              <arcgis-assistant-agent
                agent={ServiceMaintenanceAgent}
                context={{
                  mapView,
                }}
              ></arcgis-assistant-agent>
              <calcite-button
                slot="footer-content"
                label="Clear map graphics"
                icon-start="clear-selection"
                onClick={() => {
                  mapView?.graphics.removeAll();
                }}
              >
                Clear map graphics
              </calcite-button>
            </arcgis-assistant>
          )}
        </calcite-panel>
      </calcite-shell-panel>
      <arcgis-map id="main-map" map={map} onarcgisViewReadyChange={handleViewReady}>
        <arcgis-zoom slot="top-left"></arcgis-zoom>
        <arcgis-expand slot="top-left">
          <arcgis-search></arcgis-search>
        </arcgis-expand>
        <arcgis-expand slot="top-left">
          <arcgis-legend></arcgis-legend>
        </arcgis-expand>
      </arcgis-map>
    </calcite-shell>
  );
}

export default App;
