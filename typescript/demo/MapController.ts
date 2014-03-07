/// <reference path="../esri.d.ts"/>

import Map = require("esri/map");
import Point = require("./Point");

export = MapController;

class MapController {
  map: Map;

  constructor(public mapDiv: string) {}

  start() {
    var point = new Point(-122.45, 37.75); // long, lat
    point.log();
    this.map = new Map(this.mapDiv, {
      basemap: "topo",
      // center: [-122.45, 37.75], // long, lat
      center: point,
      zoom: 13
    });
  }
}
