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

import React from "react";
import ReactDOM from "react-dom/client";

import ArcadeEditor from "./components/ArcadeEditor";

// Individual imports for each component
import { setArcgisAssetPath as setCodingComponentsAssetPath } from "@arcgis/coding-components/dist/components";
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
import "@esri/calcite-components/dist/components/calcite-scrim";

setCodingComponentsAssetPath("https://js.arcgis.com/coding-components/4.30/assets");
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.0/assets");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArcadeEditor />
  </React.StrictMode>
);
