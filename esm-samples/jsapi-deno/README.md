# ArcGIS API for JavaScript in Deno

Integrating [Deno](https://deno.land/) with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by using [TypeScript](https://www.typescriptlang.org/) with no compile steps.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "npm:@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```

## Deno Server

These samples use the [oak](https://deno.land/x/oak@v11.1.0) middleware for building a server with Deno. Please refer to the oak documentation for more details.

## Commands

Shell scripts have been provided to quickly run these samples.

To run a test app, execute these commands in a terminal window:
*  WebMap Sample - `./webmap.sh`
*  Request Sample - `./request.sh`

