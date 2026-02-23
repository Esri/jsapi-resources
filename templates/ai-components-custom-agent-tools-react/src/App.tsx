import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-expand";

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

import "@arcgis/ai-components/components/arcgis-assistant";
import "@arcgis/ai-components/components/arcgis-assistant-agent";
import "@arcgis/ai-components/components/arcgis-assistant-navigation-agent";
import "@arcgis/ai-components/components/arcgis-assistant-data-exploration-agent";
import "@arcgis/ai-components/components/arcgis-assistant-help-agent";

// Core API import
import WebMap from "@arcgis/core/WebMap.js";

import { useState } from "react";
import MapView from "@arcgis/core/views/MapView.js";
import { LocationServicesAgent } from "./locationServicesAgent";

function App() {
  const map = new WebMap({
    portalItem: {
      id: "957e1e4d26994e8ca34248e45067f4b9",
    },
  });

  const [mapView, setMapView] = useState<MapView | null>(null);

  const handleViewReady = (event: any) => {
    const viewElement = event.target;
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
              heading="Walk and drive times"
              description="Use the chat below to calculate drive times and walking distances to understand the accessibility of different locations."
              entry-message="You must first navigate to a location on the map using the navigation agent before asking about drive times or walking distances."
              suggested-prompts={[
                "Go to the Palm Springs convention center",
                "How far can I get in 10 minutes walking from the convention center?",
              ]}
              log-enabled
            >
              <arcgis-assistant-navigation-agent></arcgis-assistant-navigation-agent>
              <arcgis-assistant-agent
                agent={LocationServicesAgent}
                context={{
                  mapView,
                }}
              ></arcgis-assistant-agent>
            </arcgis-assistant>
          )}
        </calcite-panel>
      </calcite-shell-panel>
      <arcgis-map id="main-map" map={map} onarcgisViewReadyChange={handleViewReady}>
        <arcgis-zoom slot="top-left"></arcgis-zoom>
        <arcgis-expand slot="top-left">
          <arcgis-legend></arcgis-legend>
        </arcgis-expand>
      </arcgis-map>
    </calcite-shell>
  );
}

export default App;
