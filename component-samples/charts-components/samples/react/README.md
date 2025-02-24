# Charts components React using Vite sample (beta)

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/charts-components-sample-react.zip)** 📁

This project showcases how to use charts components with [React](https://react.dev/).

## Get started

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

## Loading All Components

Charts components currently only support loading all components. You can register all components at once using the following approach:

```js
import { defineCustomElements } from "@arcgis/charts-components/dist/loader";

defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });
```
