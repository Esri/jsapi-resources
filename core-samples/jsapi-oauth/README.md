# Accessing ArcGIS Online using OAuth 2.0 with ESM + Vite

This sample demonstrates how to log in to ArcGIS Online or Enterprise using OAuth 2.0 authentication and the [IdentityManager](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) with [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with [Vite](https://vitejs.dev/) .

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-oauth.zip)** 📁

1. Create a registered application in ArcGIS Online or ArcGIS Enterprise and add a valid referrer URL that will redirect you back to your hosted application after login. See the [Register an OAuth application](https://developers.arcgis.com/documentation/security-and-authentication/app-authentication/tutorials/create-oauth-credentials-app-auth/) tutorial for more details.
2. Copy the Client ID from your registered application in step 1 and use it to replace the `appId` property in `OAuthInfo` in the main.js file.
   **_Note:_** If you set OAuthInfo's `popup` property to `true`, follow the [OAuth callback setup instructions](https://github.com/Esri/jsapi-resources/tree/main/oauth).
3. Run `npm install` then `npm run dev` to test the app. When testing locally you may need to add a [redirect URL](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/add-redirect-uri/) if you are seeing redirect errors when you test logging in, e.g. http://localhost:5173/.

For a list of all available `npm` commands see `scripts` in `package.json`.

For additional information, see:

- [Implement user authentication](https://developers.arcgis.com/javascript/latest/tutorials/implement-user-authentication/) in the ArcGIS Maps SDK for JavaScript documentation.
- [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started/#npm/) Guide topic in the SDK.
