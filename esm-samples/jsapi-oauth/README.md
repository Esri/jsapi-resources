# Accessing ArcGIS Online items using OAuth 2.0 with Vite + TS

This repo demonstrates how to log in to ArcGIS Online or Enterprise using OAuth 2.0 authentication and the [IdentityManager](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) with [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with [Vite](https://vitejs.dev/) .

## Get Started

1. Create a registered application in ArcGIS Online or ArcGIS Enterprise and add a valid redirect URL that will redirect you back to your hosted application after login. See the [Register an OAuth application](https://next.sites.afd.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/register-your-application/) tutorial for more details.
2. Copy the Client ID from your registered application in step 1 and use it to replace the `appId` property on line 27 in the main.ts file.
3. Run `npm install` then `npm build dev` to test the app.

For a list of all available `npm` commands see `scripts` in `package.json`.

For additional information, see:
- [Access ArcGIS Online items using OAuth 2.0](https://developers.arcgis.com/javascript/latest/sample-code/identity-oauth-basic/) sample in the ArcGIS Maps SDK for JavaScript documentation to understand how this sample works.
- [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Learn More

You can learn more in the [Vite guides](https://vitejs.dev/guide/).
