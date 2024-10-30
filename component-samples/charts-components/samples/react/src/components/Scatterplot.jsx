import { useEffect, useRef, useCallback } from "react";

import { ArcgisChartsActionBar, ArcgisChartsScatterPlot } from "@arcgis/charts-components-react";
import { ScatterPlotModel } from "@arcgis/charts-model";

import { createFeatureLayer } from "../functions/create-feature-layer";
import { addSelectionEventListener } from "../functions/add-selection-event-listener";

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

    scatterplotRef.current.config = config;
    scatterplotRef.current.layer = layer;

    // Add an event listener for when selections are made on the chart, the filter by selection button will be enabled
    addSelectionEventListener(scatterplotRef.current, "scatterplot-action-bar");
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initScatterplot().catch(console.error);
  }, [initScatterplot]);

  return (
    <ArcgisChartsScatterPlot ref={scatterplotRef} class="chart-component" id="scatteplot">
      <ArcgisChartsActionBar slot="action-bar" id="scatterplot-action-bar"></ArcgisChartsActionBar>
    </ArcgisChartsScatterPlot>
  );
}
