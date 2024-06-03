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

import React from 'react';
import ReactDOM from 'react-dom/client';
import Scatterplot from './components/Scatterplot';
import { defineCustomElements as defineCalciteElements } from '@esri/calcite-components/dist/loader';
import { defineCustomElements as defineChartsElements } from '@arcgis/charts-components/dist/loader';

// define custom elements in the browser, and load the assets from the CDN
defineChartsElements(window, { resourcesUrl: 'https://js.arcgis.com/charts-components/4.30/t9n' });
defineCalciteElements(window, { resourcesUrl: 'https://js.arcgis.com/calcite-components/2.8.0/assets' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Scatterplot />
  </React.StrictMode>
);
