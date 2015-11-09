define([
  "esri/map",
  "esri/dijit/Measurement",
  "dojo/domReady!"
], function (
  Map, Measurement
) {
  var map = new Map("map-area", {
    basemap: "dark-gray",
    center: [-119.11, 36.65],
    zoom: 7,
    minZoom: 7,
    maxZoom: 9
  });
  map.on('load', function() {
    var measurement = new Measurement({
      map: map
    }, document.getElementById('measureDiv'));
    measurement.startup();
  });
});
