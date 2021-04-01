import esriConfig from "@arcgis/core/config.js";
import * as pe from "@arcgis/core/geometry/projection.js";
import Point from "@arcgis/core/geometry/Point.js";

// Required: Set this property to insure assets resolve correctly.
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root

pe.load()
  .then(() => {
    console.log(
      pe.project(new Point({ x: -117, y: 34 }), { wkid: 3857 }).toJSON()
    );
  })
  .catch((error) => {
    console.error(error);
  });
