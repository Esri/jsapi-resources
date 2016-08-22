define([
  "esri/map",
  "esri/dijit/Popup", "esri/dijit/PopupTemplate",
  "esri/layers/VectorTileLayer",
  "esri/layers/FeatureLayer",
  "esri/dijit/Measurement",
  "dojo/domReady!"
], function (
  Map, Popup, PopupTemplate, VectorTileLayer, FeatureLayer, Measurement
) {
  var popup = new Popup({}, document.createElement("div"));
  var map = new Map("map-area", {
    center: [-82.44109, 35.6122],
    zoom: 15,
    minZoom: 7,
    infoWindow: popup
  });
  var popupTemplate = new PopupTemplate({
    title: "Trees",
    description: "{*}"
  });
  var vtlayer = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json");
  map.addLayer(vtlayer);
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
