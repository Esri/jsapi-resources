# ArcGIS Maps SDK for Javascript: Map Components Oauth Sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-components-ouath-sample-vite.zip)** 📁

This sample demonstrates how to log in to ArcGIS Online or Enterprise using `OAuth 2.0` authentication and the `IdentityManager` with the ArcGIS JavaScript SDK for Map Components with ES modules in a Vite-based application.

## Get Started

1. Create a registered application in ArcGIS Online or ArcGIS Enterprise and add a valid referrer URL that will redirect you back to your hosted application after login. For detailed steps, refer to the [Register an OAuth application](https://developers.arcgis.com/documentation/security-and-authentication/app-authentication/tutorials/create-oauth-credentials-app-auth/) tutorial.
2. Update the `main.js` File:
   - Replace `YOUR_PORTAL_URL` with your actual portal URL to match your OAuth application’s settings.
   - Copy the Client ID from your registered application and replace the `YOUR_APP_ID` in the `OAuthInfo` object.
   - **_Note:_** If you set OAuthInfo's `popup` property to `true`, follow the [OAuth callback setup instructions](https://github.com/Esri/jsapi-resources/tree/main/oauth).

- **_Important:_** Replace the `item-id` in `index.html` with a secure web map item ID from the portal configured in `main.js` to ensure your application functions securely.

3. Run `npm install` then `npm run dev` to start the app locally.

## Additional Resources

- [Implement User Authentication](https://developers.arcgis.com/javascript/latest/tutorials/implement-user-authentication/)
- [ArcGIS Maps SDK for JavaScript Documentation](https://developers.arcgis.com/javascript/)
- [Vite Documentation](https://vitejs.dev/)
