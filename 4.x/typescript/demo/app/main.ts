import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Basemap = require("esri/Basemap");
import Point = require("esri/geometry/Point");

const map = new EsriMap({
  basemap: "streets" as any as Basemap
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: new Point({
    x: -118.244,
    y: 34.052
  }),
  zoom: 12
});
