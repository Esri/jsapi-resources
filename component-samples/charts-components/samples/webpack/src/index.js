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

import { ScatterPlotModel } from '@arcgis/charts-model';
import { createFeatureLayer } from './create-feature-layer';

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements(window, { resourcesUrl: 'https://js.arcgis.com/calcite-components/2.8.0/assets' });
defineChartsElements(window, { resourcesUrl: 'https://js.arcgis.com/charts-components/4.30/t9n' });

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
}

// Call initScatterplot() function to render the chart.
initScatterplot();
