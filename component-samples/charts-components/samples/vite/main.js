import './style.css';

import { ScatterPlotModel } from '@arcgis/charts-model';
import { createFeatureLayer } from './create-feature-layer';
import { addSelectionEventListener } from './add-selection-event-listener';

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from '@arcgis/charts-components/dist/loader';

// Define custom elements in the browser, and load the assets from the CDN
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.13.2/assets" });
defineChartsElements(window, { resourcesUrl: 'https://js.arcgis.com/charts-components/4.31/assets' });

// Function to initialize the scatterplot.
async function initScatterplot() {
  const layer = await createFeatureLayer('https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0');

  const scatterplotElement = document.getElementById('scatterplot');

  // Create a new ScatterPlotModel and set the x and y axis fields.
  const scatterplotModel = new ScatterPlotModel();
  await scatterplotModel.setup({ layer });

  await scatterplotModel.setXAxisField('Ward');
  await scatterplotModel.setYAxisField('Beat');

  // Set the scatterplot element's config and layer properties.
  const config = scatterplotModel.getConfig();

  scatterplotElement.config = config;
  scatterplotElement.layer = layer;

  // Add an event listener for when selections are made on the chart, the filter by selection button will be enabled
  addSelectionEventListener(scatterplotElement, "scatterplot-action-bar");
}

// Call initScatterplot() function to render the chart.
initScatterplot();
