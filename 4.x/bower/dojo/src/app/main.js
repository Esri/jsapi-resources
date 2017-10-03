define([
  "esri/Map",
  "esri/views/SceneView",
  "esri/widgets/Search"
], function (
  Map, SceneView,
  Search
) {
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
