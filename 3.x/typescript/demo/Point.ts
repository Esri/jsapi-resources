/// <reference path="../arcgis-js-api.d.ts"/>

import AGSPoint = require("esri/geometry/Point");

export = Point;

class Point extends AGSPoint {

//  constructor(public x: number, public y: number) {
//    super(x, y);
//  }

  log() {
    console.log(this.type, this.x, this.y);
  }
}
