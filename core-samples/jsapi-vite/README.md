# ArcGIS Maps SDK for JavaScript with Vite

This sample demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with [Vite](https://vitejs.dev/) without a framework.

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-vite.zip)** 📁

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/#api) Guide topic in the SDK.

## Known issues

- It is recommended to avoid using [top level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) in vanilla Vite applications due to limitations in Rollup production builds that may result in runtime application hangs. There are multiple alternatives. You can use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), async [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), async [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), or use the SDK's events.

## Learn More

You can learn more in the [Vite guides](https://vitejs.dev/guide/).
