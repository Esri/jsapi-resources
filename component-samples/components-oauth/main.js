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

// Import the ArcGIS Map Components
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";

// Import ArcGIS core modules for OAuth authentication
import esriConfig from "@arcgis/core/config";
import esriId from "@arcgis/core/identity/IdentityManager.js";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";

// Configure the portal URL and OAuth settings
esriConfig.portalUrl = "YOUR_PORTAL_URL"; // Replace with your actual Portal URL

const oAuthInfo = new OAuthInfo({
    appId: "YOUR_APP_ID", // Replace with your actual App ID
    portalUrl: esriConfig.portalUrl,
    popup: false,
});

esriId.registerOAuthInfos([oAuthInfo]);

// Function to load map components after authentication
function loadMapComponents() {
    const mapElement = document.querySelector('arcgis-map');
    mapElement.itemId = "d5dda743788a4b0688fe48f43ae7beb9";

    mapElement.addEventListener('arcgisViewReadyChange', event => {
        console.log('MapView ready', event);
    });
}

// Check if the user is already signed in
esriId.checkSignInStatus(esriConfig.portalUrl + "/sharing")
    .then(() => {
        // User is already signed in, load the map components
        loadMapComponents();
    })
    .catch(() => {
        // User is not signed in, prompt for sign-in and then load components
        esriId.getCredential(esriConfig.portalUrl).then(loadMapComponents);
    });
