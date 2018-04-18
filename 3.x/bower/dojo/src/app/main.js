define([
  "esri/map",
  "esri/urlUtils",
  "esri/arcgis/utils",
  "esri/dijit/ColorInfoSlider"
], function(Map, urlUtils, arcgisUtils, ColorInfoSlider) {
  // if accessing webmap from a portal outside of ArcGIS Online, uncomment and replace path with portal URL
  // arcgisUtils.arcgisUrl = "https://devext.arcgis.com/sharing/content/items";

  arcgisUtils
    .createMap("a5b3d1196239447a880f3e47e5ed467a", "mapDiv")
    .then(function(response) {
      var map = response.map;
      var zipCodeLayerId = map.graphicsLayerIds[0];
      var zipCodeLayer = map.getLayer(zipCodeLayerId);

      var renderer = zipCodeLayer.renderer;
      var authoringColorInfo = renderer.authoringInfo.visualVariables[0];
      var colorVisualVariable = renderer.visualVariables.filter(function(vv) {
        return vv.type === authoringColorInfo.type;
      })[0];

      document.getElementById("title").innerHTML =
        colorVisualVariable.valueExpressionTitle;

      var sliderMin = 40; // statistical min is 0, but 40 allows us to zoom to the histogram
      var sliderMax = authoringColorInfo.maxSliderValue;

      zipCodeLayer
        .addPlugin("esri/plugins/FeatureLayerStatistics")
        .then(function() {
          zipCodeLayer.statisticsPlugin
            .getHistogram({
              valueExpression: colorVisualVariable.valueExpression,
              // querying with matching SQL expression gets histogram for full dataset
              sqlExpression: "( ACSNRETINC / (ACSNRETINC + ACSRETINC) ) * 100",
              sqlWhere: "ACSNRETINC + ACSRETINC > 0", // avoid dividing by 0
              numBins: 30,
              minValue: sliderMin,
              maxValue: sliderMax
            })
            .then(function(histogram) {
              var colorInfoSlider = new ColorInfoSlider(
                {
                  colorInfo: colorVisualVariable,
                  minValue: sliderMin,
                  maxValue: sliderMax,
                  histogram: histogram,
                  handles: [0, 2, 4],
                  primaryHandle: 2
                },
                "colorSliderElement"
              );
              colorInfoSlider.startup();

              // reset renderer for each slider change
              colorInfoSlider.on("data-change", function(event) {
                zipCodeLayer.renderer.setVisualVariables([event.colorInfo]);
                zipCodeLayer.redraw();
              });
            });
        });
    });
});
