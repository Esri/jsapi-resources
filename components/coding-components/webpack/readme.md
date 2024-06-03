# Coding components Webpack template

📁 **[Click here to download this directory as a ZIP file](https://download-directory.github.io?url=https://github.com/Esri/arcgis-maps-sdk-javascript-samples-beta/tree/main/packages/coding-components/templates/webpack)** 📁

This repository showcases how to integrate the coding components using webpack.

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
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets" });
defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/4.29/assets" });
```

Use [`src/index.js`](./src/index.js) to load the data, define custom elements, and utilize various kinds of properties in the editor. Both the Calcite and Coding elements must be defined.

#### CSS

You can find all the necessary styling in [`src/index.css`](./src/index.css). Importing the global Calcite and coding components CSS is required.

```
@import "https://js.arcgis.com/coding-components/4.29/arcgis-coding-components.css";
@import "https://js.arcgis.com/calcite-components/2.5.1/calcite.css";
```

#### HTML

Parsing the `index.html` was simplified by using the HtmlWebpackPlugin in the webpack configuration file.

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      title: "Coding components Webpack template",
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

[Webpack 5's `experiments` option](https://webpack.js.org/configuration/experiments/)

[Defining custom elements](https://stenciljs.com/docs/custom-elements-bundle)

### Webpack plugins

For the webpack configuration file ([`webpack.config.js`](webpack.config.js))

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

[mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

[terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/)
