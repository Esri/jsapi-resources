# ArcGIS Maps SDK for JavaScript Webpack template

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/js-maps-sdk-webpack.zip)** 📁

This template demonstrates how to use the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) in a Webpack application.

## Get started

To quickly scaffold a new application using this template, run the following command in your terminal:

```bash
npx @arcgis/create -n my-arcgis-app -t webpack
```

This template uses the following packages:

- [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core)
- [`@arcgis/map-components`](https://www.npmjs.com/package/@arcgis/map-components)
- [`@arcgis/charts-components`](https://www.npmjs.com/package/@arcgis/charts-components)
- [`@esri/calcite-components`](https://www.npmjs.com/package/@esri/calcite-components)

## Optional debugging

If you notice hard-to-read stack traces or browser warnings about missing source maps, you can enable [source-map-loader](https://v4.webpack.js.org/loaders/source-map-loader/) for better debugging.

```mjs
// webpack.config.mjs
const config = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
      ...
    ];
  }
};
```

## Resources

See the [Get started with npm guide](https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate) for full instructions.
