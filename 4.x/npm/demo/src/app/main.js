define([
  "dojo/has",
  "esri/config",
  "esri/Map",
  "esri/views/SceneView",
  "esri/widgets/Search"
], function (
  has, esriConfig,
  Map, SceneView,
  Search
) {

  if (!has("dojo-built")) {
    esriConfig.workers.loaderConfig = {
      paths: {
        "esri": "../arcgis-js-api"
      }
    };
  }

  var map = new Map({
    basemap: "streets-night-vector",
    ground: "world-elevation"
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    scale: 50000000,
    center: [-101.17, 21, 78]
  });

  var searchWidget = new Search({
    view: view,
    container: "searchDiv"
  });
});
