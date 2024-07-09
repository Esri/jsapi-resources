# ArcGIS Maps SDK for JavaScript in Deno

Integrating [Deno](https://deno.com//) with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by using [TypeScript](https://www.typescriptlang.org/) with no compile steps.

Please refer to the [Deno installation](https://docs.deno.com/runtime/manual/getting_started) instructions for your environment.

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-deno.zip)** 📁

## Usage

The `@arcgis/core` package can be referenced with [npm specifiers](https://docs.deno.com/runtime/manual/node/npm_specifiers), meaning you do not need to manually install the package in your projects.

## Notes

Currently loading the web assembly files for modules such as [projection](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-projection.html) does not work in Deno.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "npm:@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```

## Deno Server

These samples use the [oak](https://deno.land/x/oak) middleware for building a server with Deno. Refer to the oak documentation for more details on configuration.

## Commands

You can run these samples with Deno using the following command.

> WebMap
```sh
deno run --allow-net --allow-env --allow-read webmap.ts
```

> Request
```sh
deno run --allow-net --allow-env --allow-read request.ts
```

Shell scripts have been provided to quickly run these samples.

To run a test app, execute these commands in a terminal window:
*  WebMap Sample - `./webmap.sh`
*  Request Sample - `./request.sh`

