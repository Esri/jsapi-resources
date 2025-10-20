// @deno-types="npm:@arcgis/core/interfaces.d.ts"
import type { Context } from "https://deno.land/x/oak@v17.1.6/mod.ts";
import { Application } from "https://deno.land/x/oak@v17.1.6/mod.ts";
import config from "npm:@arcgis/core@next/config.js";
import WebMap from "npm:@arcgis/core@next/WebMap.js";

import * as esriNS from "npm:@arcgis/core@next/kernel.js";

console.log(esriNS.fullVersion);

// Disable so it doesn't attempt to load DOM-related JavaScript.
config.request.useIdentity = false;

const app = new Application();

const port = 8000;

app.use(async (ctx: Context) => {
  const webmap = new WebMap({
    portalItem: { id: "3d52817a120b477db912add2e62ef9b6" },
  });

  await webmap.load();

  ctx.response.headers.set("Content-Type", "text/html");
  ctx.response.body = `<h3>WebMap PortalItem description:</h3><hr/>${webmap.portalItem.description}`;
});

app.listen({ port });

console.log(`Deno server running. Access it at: http://localhost:${port}/`);
