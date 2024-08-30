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

import "./styles.css";

// Import ArcGIS core modules for OAuth authentication
import esriConfig from "@arcgis/core/config";
import esriId from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";

// Import the ArcGIS Map Components
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";

// Configure the portal URL and OAuth settings
esriConfig.portalUrl = "YOUR_PORTAL_URL"; // Replace with your actual Portal URL

const oAuthInfo = new OAuthInfo({
  appId: "YOUR_APP_ID", // Replace with your actual App ID
  portalUrl: esriConfig.portalUrl,
  popup: false,
});

esriId.registerOAuthInfos([oAuthInfo]);

// Select the map element
const mapElement = document.querySelector("arcgis-map");

// Add event listener for when the MapView is ready
mapElement.addEventListener("arcgisViewReadyChange", (event) => {
  console.log("MapView ready", event);
});

