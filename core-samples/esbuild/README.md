# ArcGIS Maps SDK for JavaScript with esbuild

This sample demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with esbuild.

## Known issues

- This sample uses esbuild code splitting which outputs a large number of on-disk files. For best performance use [HTTP/2](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2) or [HTTP/3](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3) for production environments. For more information: https://esbuild.github.io/api/#splitting.

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-esbuild.zip)** 📁

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started/#npm) Guide topic in the SDK.
