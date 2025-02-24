// @deno-types="npm:@arcgis/core/interfaces.d.ts"
import type { Context } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import config from "npm:@arcgis/core@4.32/config.js";
import esriRequest from "npm:@arcgis/core@4.32/request.js";

config.request.useIdentity = false;

const app = new Application();

const url = "https://www.arcgis.com/sharing/rest";
const port = 8000;

app.use(async (ctx: Context) => {
  const response = await esriRequest(url, {
    query: {
      f: "json",
    },
  });
  ctx.response.headers.set("Content-Type", "text/html");
  ctx.response.body = `<h3>ArcGIS Response Info:</h3><hr/>${JSON.stringify(response.data, null, 2)}`;
});

app.listen({ port });

console.log(`Deno server running. Access it at: http://localhost:${port}/`);
