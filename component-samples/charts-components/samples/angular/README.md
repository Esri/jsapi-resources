# Charts components Angular sample (beta)

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/charts-components-sample-angular.zip)** 📁

This project showcases how to use charts components with [Angular](https://angular.dev/).

## Get started

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

## Loading All Components

Charts components currently only support loading all components. You can register all components at once using the following approach:

```js
import { defineCustomElements } from "@arcgis/charts-components/dist/loader";

defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });
```

## Known issues

- The [@arcgis/charts-components-angular](https://www.npmjs.com/package/@arcgis/charts-components-angular) npm package has been deprecated at 4.31. We recommend using the `@arcgis/charts-components`, as shown in this sample.
- The compile warning `The glob pattern import("./**/*.entry.js*") did not match any files [empty-glob]` is a known issue with Stencil and it can be ignored.
