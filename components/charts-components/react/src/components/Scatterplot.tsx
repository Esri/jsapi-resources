/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect, useRef, useCallback } from "react";

import { ArcgisChartsActionBar, ArcgisChartsScatterPlot } from "@arcgis/charts-components-react";
import { ScatterPlotModel } from "@arcgis/charts-model";

import { createFeatureLayer } from "../functions/create-feature-layer";

import "./Charts.css";
// set the default action bar based on the series type
function setDefaultActionBar(chartElementId: string, seriesType: string) {
  const actionBarElement = document.getElementById(chartElementId) as HTMLArcgisChartsActionBarElement;

  if (actionBarElement !== null) {
    actionBarElement.actionBarHideActionsProps = {
      hideRotateChart: seriesType === "histogramSeries" || seriesType === "pieSeries" || seriesType === "scatterSeries",
      hideFilterByExtent: true,
      hideZoom: true,
      hideSelection: true,
      hideFullExtent: true
    };
  }
}

// Default export for the Scatterplot component
export default function Scatterplot() {
  const scatterplotRef = useRef(null);

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initScatterplot = useCallback(async () => {
    const layer = await createFeatureLayer(
      "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0"
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

    // Add event listener when selection is made on the chart to enable/disable action bar buttons.
    scatterplotRef.current.addEventListener("arcgisChartsSelectionComplete", (event: CustomEvent) => {
      const actionBarElement = document.getElementById("scatter-plot-action-bar") as HTMLArcgisChartsActionBarElement;

      const selectionData = event.detail;
      if (selectionData.selectionOIDs === undefined || selectionData.selectionOIDs.length === 0) {
        actionBarElement.clearSelectionState = "disabled";
        actionBarElement.filterBySelectionState = "disabled";
      } else {
        actionBarElement.clearSelectionState = "enabled";
        actionBarElement.filterBySelectionState = "enabled";
      }
    });

    // Set the default actions for the action bar based on the series type
    setDefaultActionBar("scatterplot-action-bar", config.series[0].type);
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
