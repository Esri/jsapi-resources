define([
  "esri/map",
  "esri/layers/VectorTileLayer",
  "esri/dijit/Measurement",
  "dojo/domReady!"
], function (
  Map, VectorTileLayer, Measurement
) {
  var map = new Map("map-area", {
    center: [-118.11, 34.65],
    zoom: 7,
    minZoom: 7
  });
  var vtlayer = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json");
  map.addLayer(vtlayer);
  map.on('load', function() {
    var measurement = new Measurement({
      map: map
    }, document.getElementById('measureDiv'));
    measurement.startup();
  });
});
