# ArcGIS Maps SDK for Javascript: Map Components Oauth Sample

This sample demonstrates how to log in to ArcGIS Online or Enterprise using `OAuth 2.0` authentication and the `IdentityManager` with the ArcGIS JavaScript SDK for Map Components with ES modules in a Vite-based application.

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-components-ouath-sample-vite.zip)** 📁

1. Create a registered application in ArcGIS Online or ArcGIS Enterprise and add a valid referrer URL that will redirect you back to your hosted application after login. For detailed steps, refer to the [Register an OAuth application](https://developers.arcgis.com/documentation/security-and-authentication/app-authentication/tutorials/create-oauth-credentials-app-auth/) tutorial.
2. Update the `main.js` File:
    - Replace `YOUR_PORTAL_URL` with your actual portal URL to match your OAuth application’s settings.
    - Copy the Client ID from your registered application and replace the `YOUR_APP_ID` in the `OAuthInfo` object.
    - ***Note:*** If you set OAuthInfo's `popup` property to `true`, follow the [OAuth callback setup instructions](https://github.com/Esri/jsapi-resources/tree/main/oauth).

- ***Important:*** Replace the `item-id` in `index.html` with a secure web map item ID from the portal configured in `main.js` to ensure your application functions securely.
3. Run `npm install` then `npm run dev` to start the app locally.

## Additional Resources

- [Implement User Authentication](https://developers.arcgis.com/javascript/latest/tutorials/implement-user-authentication/)
- [ArcGIS Maps SDK for JavaScript Documentation](https://developers.arcgis.com/javascript/)
- [Vite Documentation](https://vitejs.dev/)

## Licensing
Copyright 2024 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/Esri/jsapi-resources/blob/master/license.txt) file.