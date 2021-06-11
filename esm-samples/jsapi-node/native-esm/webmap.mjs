#!/usr/bin/env node

// load `fetch` and AbortController polyfills
import "cross-fetch/dist/node-polyfill.js";
import "abort-controller/polyfill.js"; // polyfill.mjs doesn't work since extensions are missing in abort-controller code

import esriConfig from "@arcgis/core/config.js";
import WebMap from "@arcgis/core/WebMap.js";

esriConfig.request.useIdentity = false;

const webmap = new WebMap({
  portalItem: { id: "3d52817a120b477db912add2e62ef9b6" },
});

webmap
  .load()
  .then(() => {
    console.log("portalItem description: ", webmap.portalItem.description);
  })
  .catch((error) => {
    console.error(error);
  });
