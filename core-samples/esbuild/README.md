# ArcGIS Maps SDK for JavaScript with esbuild (Deprecated)

This sample demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with esbuild.

**DEPRECATED** since 4.34. New applications should be built with [components](../../component-samples/). Read about the [transition plan from widgets to components](https://developers.arcgis.com/javascript/latest/components-transition-plan/).

## Known issues

- This sample uses esbuild code splitting which outputs a large number of on-disk files. For best performance use [HTTP/2](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2) or [HTTP/3](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3) for production environments. For more information: https://esbuild.github.io/api/#splitting.
- This sample includes a workaround for a known esbuild bug that duplicates CSS: https://github.com/evanw/esbuild/issues/3529. The bug causes the Calcite Components CSS to be duplicated, which increases the size of on-disk build output by up to 10MB, as well as adds approximately 275 additional CSS files. The workaround uses the `postbuild` script included in the package.json file to delete the duplicate files.

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/esbuild.zip)** 📁

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started/#npm) Guide topic in the SDK.
