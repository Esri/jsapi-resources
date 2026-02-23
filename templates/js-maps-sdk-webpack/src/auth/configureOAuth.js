import esriConfig from "@arcgis/core/config.js";
import esriId from "@arcgis/core/identity/IdentityManager.js";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";

// If popup is set to true, you'll need to implement oauth callback logic manually
// See: https://github.com/Esri/jsapi-resources/tree/main/oauth
export function configureOAuth({ portalUrl, appId, popup = false }) {
  if (portalUrl) {
    esriConfig.portalUrl = portalUrl;
  }

  const oAuthInfo = portalUrl
    ? new OAuthInfo({
        appId,
        portalUrl,
        popup,
      })
    : new OAuthInfo({
        appId,
        popup,
      });

  esriId.registerOAuthInfos([oAuthInfo]);
}
