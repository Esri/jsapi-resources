define([
  "dojo/has",
  "esri/config",

  "esri/WebMap",
  "esri/layers/CSVLayer",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/Expand"
], function (
  has, esriConfig,
  WebMap, CSVLayer, MapView,
  Legend, Expand
) {

  if (!has("dojo-built")) {
    esriConfig.workers.loaderConfig = {
      paths: {
        "esri": "../arcgis-js-api",
        "dstore": "../dojo-dstore"
      }
    };
  }

  var url =
        "https://arcgis.github.io/arcgis-samples-javascript/sample-data/hurricanes.csv";

  var csvLayer = new CSVLayer({
    title: "Hurricanes",
    url: url,
    copyright: "NOAA",
    popupTemplate: {
      title: "{Name}",
      content: [{
        type: "text",
        text: "Category {Category} storm with that occurred at {ISO_time}."
      }, {
        type: "fields",
        fieldInfos: [{
          fieldName: "wmo_pres",
          label: "Pressure"
        }, {
          fieldName: "wmo_wind",
          label: "Wind Speed (mph)"
        }]
      }],
      fieldInfos: [{
        fieldName: "ISO_time",
        format: {
          dateFormat: "short-date-short-time"
        }
      }]
    },
    renderer: {
      type: "unique-value",
      field: "Category",
      uniqueValueInfos: createUniqueValueInfos()
    }
  });

  var map = new WebMap({
    // contains a basemap with a South Pole Stereographic projection
    // the CSVLayer coordinates will re-project client-side
    // with the Projection Engine to match the view's Spatial Reference
    basemap: {
      portalItem: {
        id: "3113eacc129942b4abde490a51aeb33f"
      }
    },
    layers: [csvLayer]
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    highlightOptions: {
      color: "#ff642e",
      haloOpacity: 1,
      fillOpacity: 0.25
    },
    popup: {
      dockEnabled: true,
      dockOptions: {
        breakpoint: false
      }
    }
  });

  var legendExpand = new Expand({
    view: view,
    content: new Legend({
      view: view,
      style: "card"
    })
  });
  view.ui.add(legendExpand, "top-left");

  function createUniqueValueInfos() {
    var fireflyImages = [
      "cat1.png",
      "cat2.png",
      "cat3.png",
      "cat4.png",
      "cat5.png"
    ];

    var baseUrl =
      "https://arcgis.github.io/arcgis-samples-javascript/sample-data/";

    return fireflyImages.map(function(url, i) {
      return {
        value: i + 1, // Category number
        symbol: {
          type: "picture-marker",
          url: baseUrl + url
        }
      }
    });
  }
});