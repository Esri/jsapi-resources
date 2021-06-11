#!/usr/bin/env node

// load `fetch` and AbortController polyfills
import "cross-fetch/dist/node-polyfill.js";
import "abort-controller/polyfill.js"; // polyfill.mjs doesn't work since extensions are missing in abort-controller code

import esriConfig from "@arcgis/core/config.js";
import esriRequest from "@arcgis/core/request.js";

esriConfig.request.useIdentity = false;

const url = "https://www.arcgis.com/sharing/rest";

esriRequest(url, {
  query: {
    f: "json",
  },
})
  .then((response) => {
    console.log("Response data: ", response.data);
  })
  .catch((error) => {
    console.error(error);
  });
