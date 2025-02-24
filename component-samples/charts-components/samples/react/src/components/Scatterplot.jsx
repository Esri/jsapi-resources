import { useEffect, useRef, useCallback } from "react";

import { ScatterPlotModel } from "@arcgis/charts-model";

import { createFeatureLayer } from "../functions/create-feature-layer";

import "../index.css";

// Default export for the Scatterplot component
export default function Scatterplot() {
  const scatterplotRef = useRef(null);

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initScatterplot = useCallback(async () => {
    const layer = await createFeatureLayer(
      "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0",
    );

    // Create a new ScatterPlotModel and set the x and y axis fields.
    const scatterplotModel = new ScatterPlotModel();
    await scatterplotModel.setup({ layer });

    await scatterplotModel.setXAxisField("Ward");
    await scatterplotModel.setYAxisField("Beat");

    // Set the scatterplot element's config and layer properties.
    const config = scatterplotModel.getConfig();

    scatterplotRef.current.model = config;
    scatterplotRef.current.layer = layer;
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initScatterplot().catch(console.error);
  }, [initScatterplot]);

  return (
    <arcgis-chart ref={scatterplotRef} id="scatteplot">
      <arcgis-charts-action-bar slot="action-bar"></arcgis-charts-action-bar>
    </arcgis-chart>
  );
}
