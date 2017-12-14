define([
  "esri/map",
  "esri/dijit/PopupTemplate",
  "esri/layers/FeatureLayer",
  "esri/dijit/Measurement"
], function (
  Map, PopupTemplate, FeatureLayer, Measurement
) {

  var map = new Map("map-area", {
    basemap: "streets-vector",
    center: [ -73.92872, 40.71321 ],
    zoom: 11,
    minZoom: 7
  });

  var featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/nyc_parks_gardens_hist_sites/FeatureServer/0", {
    outFields: [ "facname", "proptype", "factype", "address" ],
    featureReduction: {
      type: "cluster"
    },
    infoTemplate: new PopupTemplate({
      title: "{facname}",
      description: "{proptype} {factype} on {address}."
    })
  });

  map.addLayer(featureLayer);
  map.on("load", function() {
    var measurement = new Measurement({
      map: map
    }, document.getElementById("measureDiv"));
    measurement.startup();
  });
});
