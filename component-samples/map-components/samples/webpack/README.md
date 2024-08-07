# Map components Webpack sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-component-sample-webpack.zip)** 📁

This repository showcases how to integrate the map components using webpack.

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

***Note:*** This sample demonstrates the recommended pattern for using components from the ArcGIS Map SDK for JavaScript by individually loading components.

### Loading All Components
The JavaScript Maps SDK also offers a convenience pattern useful for quick testing and prototyping. You can register all components at once using the following approach:

```
// Replace the individual imports with defineCustomElements()
 import { defineCustomElements } from "@arcgis/map-components/dist/loader";
 defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });
```

For more details on using the SDK, please refer to the [ArcGIS Maps SDK for JavaScript documentation](https://developers.arcgis.com/javascript/latest/get-started-overview/).
