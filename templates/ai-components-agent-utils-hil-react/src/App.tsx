import "./index.css";

import React, { useRef, useState } from "react";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-expand";

import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-shell-panel";
import "@esri/calcite-components/components/calcite-button";

//import calcite table* for md formatting in assistant response
import "@esri/calcite-components/components/calcite-table";
import "@esri/calcite-components/components/calcite-table-row";
import "@esri/calcite-components/components/calcite-table-header";
import "@esri/calcite-components/components/calcite-table-cell";

import "@arcgis/ai-components/components/arcgis-assistant";
import "@arcgis/ai-components/components/arcgis-assistant-agent";
import "@arcgis/ai-components/components/arcgis-assistant-navigation-agent";
import "@arcgis/ai-components/components/arcgis-assistant-data-exploration-agent";

import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

// Core API import
import WebMap from "@arcgis/core/WebMap.js";

import { ServiceMaintenanceAgent } from "./maintenanceAgent";
import type { ArcgisAssistant } from "@arcgis/ai-components/components/arcgis-assistant";

function App(): React.JSX.Element {
  const map = new WebMap({
    portalItem: {
      id: "394f946eac284ce0b5a93fdc194c5430",
    },
  });

  const mapElementRef = useRef<ArcgisMap | null>(null);
  const assistantElementRef = useRef<ArcgisAssistant | null>(null);

  return (
    <calcite-shell>
      <calcite-shell-panel slot="panel-end" width="l" id="assistant-panel">
        <calcite-panel>
          <arcgis-assistant
            reference-element="#main-map"
            ref={assistantElementRef}
            heading="Road maintenance service requests"
            description="This map displays reported road maintenance issues in the city."
            entry-message="Use the assistant to log new maintenance issues or explore existing service requests."
            keep-suggested-prompts
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
              context={async () => {
                const mapElement = mapElementRef.current!;
                await mapElement.componentOnReady();
                await mapElement.viewOnReady();
                return {
                  mapElement,
                };
              }}
            ></arcgis-assistant-agent>
            <calcite-button
              slot="footer-content"
              label="Reset chat history"
              icon-start="reset"
              onClick={() => {
                mapElementRef.current!.graphics.removeAll();
                assistantElementRef.current!.clearChatHistory();
              }}
            >
              Reset chat history
            </calcite-button>
          </arcgis-assistant>
        </calcite-panel>
      </calcite-shell-panel>
      <arcgis-map id="main-map" map={map} ref={mapElementRef}>
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
