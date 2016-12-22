define([
  "esri/Map",
  "esri/views/SceneView",
  "esri/widgets/Search",
  "esri/widgets/Search/SearchViewModel",
  "dojo/domReady!"
], function (
  Map, SceneView,
  Search, SearchVM
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
    viewModel: new SearchVM({
      view: view
    })
  }, "searchDiv");

  searchWidget.startup();
});
