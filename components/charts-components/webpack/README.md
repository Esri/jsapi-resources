# Charts components Webpack template

📁 **[Click here to download this directory as a ZIP file](https://download-directory.github.io?url=https://github.com/Esri/arcgis-maps-sdk-javascript-samples-beta/tree/main/packages/charts-components/templates/webpack)** 📁

This repository showcases how to integrate the charts components using webpack.

## Project setup

Instructions for setup after you save this directory to your machine.

### Install dependencies

#### npm

```
npm install
```

#### yarn

```
yarn install
```

### Start the development server

#### npm

```
npm run start
```

#### yarn

```
yarn start
```

### Generate the production-ready compiled code

#### npm

```
npm run build
```

#### yarn

```
yarn build
```

#### JS

Imported the components using [Stencil's pattern for integrating components without a JavaScript framework](https://stenciljs.com/docs/javascript).

```js
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.29/t9n" });
```

Use [`src/index.js`](./src/index.js) to load the data, define custom elements, and utilize various kinds of properties in the editor. Both the Calcite and Charts elements must be defined.

#### CSS

You can find all the necessary styling in [`src/index.css`](./src/index.css).

#### HTML

Parsing the `index.html` was simplified by using the HtmlWebpackPlugin in the webpack configuration file.

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      title: "Charts components Webpack template",
      template: "./public/index.html",
      filename: "./index.html",
      chunksSortMode: "none",
      inlineSource: ".(css)$"
    }),
    ...
  ]
};
```

## Resources

[Webpack's getting started guide](https://webpack.js.org/guides/getting-started/)

[Defining custom elements](https://stenciljs.com/docs/custom-elements-bundle)

### Webpack plugins

For the webpack configuration file ([`webpack.config.js`](webpack.config.js))

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

[mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

[terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/)
