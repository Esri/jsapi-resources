define([
  "esri/map",
  "esri/dijit/Popup", "esri/dijit/PopupTemplate",
  "esri/layers/FeatureLayer",
  "esri/dijit/Measurement",
  "dojo/domReady!"
], function (
  Map, Popup, PopupTemplate, FeatureLayer, Measurement
) {
  var popup = new Popup({}, document.createElement("div"));
  var map = new Map("map-area", {
    basemap: "streets-vector",
    center: [-82.44109, 35.6122],
    zoom: 15,
    minZoom: 7,
    infoWindow: popup
  });
  var popupTemplate = new PopupTemplate({
    title: "Trees",
    description: "{*}"
  });
  var featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0", {
    outFields: ["*"],
    infoTemplate: popupTemplate
  });

  map.addLayer(featureLayer);
  map.on("load", function() {
    var measurement = new Measurement({
      map: map
    }, document.getElementById("measureDiv"));
    measurement.startup();
  });
});
