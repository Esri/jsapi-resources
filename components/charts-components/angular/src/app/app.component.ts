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

import { Component, ViewChild } from '@angular/core';
import { loadFeatureLayer } from '../functions/load-data.service';
import { ScatterPlotModel } from '@arcgis/charts-model';

import { defineCustomElements as defineChartsElements } from '@arcgis/charts-components/dist/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'charts-components-angular-template';

  @ViewChild('scatterPlot') scatterPlot: HTMLArcgisChartsScatterPlotElement | undefined;

  ngOnInit() {
    // define custom elements in the browser, and load the assets from the CDN
    defineChartsElements(window, { resourcesUrl: 'https://js.arcgis.com/charts-components/4.29/t9n' });

    // Call async functions here
    this.createScatterPlot();
  }

  // Async function to create a scatter plot
  async createScatterPlot() {
    const featureLayer = await loadFeatureLayer('8871626e970a4f3e9d6113ec63a92f2f');

    const scatterPlotParams = {
      layer: featureLayer,
      xAxisFieldName: 'Earnings',
      yAxisFieldName: 'Cost',
    };

    const scatterPlotModel = new ScatterPlotModel(scatterPlotParams);

    const config = await scatterPlotModel.config;

    if (this.scatterPlot !== undefined) {
      this.scatterPlot.config = config;
      this.scatterPlot.layer = featureLayer;
    }
  }
}
