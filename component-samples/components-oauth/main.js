import "./styles.css";

// Import ArcGIS core modules for OAuth authentication
import esriConfig from "@arcgis/core/config";
import esriId from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";

// Import the ArcGIS Map Components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";

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
