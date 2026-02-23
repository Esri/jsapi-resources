#!/usr/bin/env node

import * as projectOperator from "@arcgis/core/geometry/operators/projectOperator.js";
import Point from "@arcgis/core/geometry/Point.js";

projectOperator
  .load()
  .then(() => {
    console.log(projectOperator.execute(new Point({ x: -117, y: 34 }), { wkid: 3857 }).toJSON());
  })
  .catch((error) => {
    console.error(error);
  });
