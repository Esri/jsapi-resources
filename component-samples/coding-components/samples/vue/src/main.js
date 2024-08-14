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

import "./assets/main.css"; // App style

import { createApp } from "vue";
import App from "./App.vue";

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

// Individual imports for each component
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-scrim";

setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.5/assets");

createApp(App).mount('#app');
