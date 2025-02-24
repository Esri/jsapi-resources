import esriConfig from "@arcgis/core/config.js";
import * as projectOperator from "@arcgis/core/geometry/operators/projectOperator.js";
import Point from "@arcgis/core/geometry/Point.js";

// Required: Set this property to ensure assets resolve correctly.
// Assets include wasm, styles, images, web workers and localization files.
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root

// Load the projectOperator dependencies first.
projectOperator.load()
  .then(() => {
    console.log(projectOperator.execute(new Point({ x: -117, y: 34 }), { wkid: 3857 }).toJSON());
  })
  .catch((error) => {
    console.error(error);
  });
