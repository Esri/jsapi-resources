# Coding components Webpack sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/coding-components-sample-webpack.zip)** 📁

This repository showcases how to integrate the coding components using webpack.

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

***Note:*** This sample demonstrates the recommended pattern for using components from the ArcGIS Map SDK for JavaScript by individually loading components.

### Loading All Components
The JavaScript Maps SDK also offers a convenience pattern useful for quick testing and prototyping. You can register all components at once using the following approach:

```
// Replace the individual imports with defineCustomElements()
 import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
 import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

 defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.8.6/assets" });
 defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/4.30/assets" });
```

For more details on using the SDK, please refer to the [ArcGIS Maps SDK for JavaScript documentation](https://developers.arcgis.com/javascript/latest/get-started-overview/).
