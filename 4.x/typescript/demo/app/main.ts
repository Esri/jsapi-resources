import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");

const map = new EsriMap({
  basemap: "streets"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});