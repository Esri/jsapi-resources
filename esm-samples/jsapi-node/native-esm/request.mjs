#!/usr/bin/env node

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
