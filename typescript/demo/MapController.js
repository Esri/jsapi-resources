/// <reference path="../esri.d.ts"/>
define(["require", "exports", "esri/map", "./Point"], function(require, exports, Map, Point) {
    

    var MapController = (function () {
        function MapController(mapDiv) {
            this.mapDiv = mapDiv;
        }
        MapController.prototype.start = function () {
            var point = new Point(-122.45, 37.75);
            point.log();
            this.map = new Map(this.mapDiv, {
                basemap: "topo",
                // center: [-122.45, 37.75], // long, lat
                center: point,
                zoom: 13
            });
        };
        return MapController;
    })();
    return MapController;
});
