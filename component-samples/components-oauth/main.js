import "./styles.css";

// Import the ArcGIS Map Components
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";

// Import ArcGIS core modules for OAuth authentication
import esriConfig from "@arcgis/core/config";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";

// Configure the portal URL and OAuth settings
esriConfig.portalUrl = "YOUR_PORTAL_URL"; // Replace with your actual Portal URL

const oAuthInfo = new OAuthInfo({
    appId: "YOUR_APP_ID", // Replace with your actual App ID
    portalUrl: esriConfig.portalUrl,
    popup: true,
});

IdentityManager.registerOAuthInfos([oAuthInfo]);

// Function to load map components after authentication
function loadMapComponents() {
    const mapElement = document.querySelector('arcgis-map');
    mapElement.itemId = "d5dda743788a4b0688fe48f43ae7beb9";

    mapElement.addEventListener('arcgisViewReadyChange', event => {
        console.log('MapView ready', event);
    });
}

// Check if the user is already signed in
IdentityManager.checkSignInStatus(esriConfig.portalUrl)
    .then(() => {
        // User is already signed in, load the map components
        loadMapComponents();
    })
    .catch(() => {
        // User is not signed in, prompt for sign-in and then load components
        IdentityManager.getCredential(esriConfig.portalUrl).then(loadMapComponents);
    });
