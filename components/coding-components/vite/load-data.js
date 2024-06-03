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

import WebMap from "@arcgis/core/WebMap";

/**
 * Simple data loader against public data.
 * For this template we are using the Popup profile.
 * For the profile definition, we need a web map and a feature layer
 * For the test data, we need a web map, a feature layer and a feature set.
 */
export async function loadData() {
  const webMap = new WebMap({
    portalItem: { id: "93d14bfd59a84af0be99a883feba052b" },
  });
  await webMap.loadAll();

  const featureLayer = webMap.findLayerById("17c807fd286-layer-47");

  const featureSet = await featureLayer.queryFeatures({
    where: "1=1",
    outFields: ["*"],
    returnGeometry: true,
  });

  return { webMap, featureLayer, featureSet };
}