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

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

/**
 * Create a feature layer with a service URL. This will be used to create a chart later.
 */
export async function createFeatureLayer(url: string): Promise<any> {
  const featureLayer = new FeatureLayer({
    url: url
  });

  await featureLayer.load();

  return featureLayer;
}
