// @deno-types="npm:@arcgis/core/interfaces.d.ts"
import { Application, Context } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import config from "npm:@arcgis/core@4.27/config.js";
import WebMap from "npm:@arcgis/core@4.27/WebMap.js";

config.request.useIdentity = false;

const app = new Application();

const port = 8000;

app.use(async (ctx: Context) => {
  const webmap = new WebMap({
    portalItem: { id: "3d52817a120b477db912add2e62ef9b6" }
  });

  await webmap.load();

  ctx.response.headers.set("Content-Type", "text/html");
  ctx.response.body = "<h3>WebMap PortalItem description:</h3><hr/>" + webmap.portalItem.description;
});

app.listen({ port });

console.log(`Deno server running. Access it at: http://localhost:${port}/`);
