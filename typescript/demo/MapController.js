/// <reference path="../esri.d.ts"/>
define(["require", "exports", "esri/map", "./Point"], function(require, exports, Map, Point) {
    

    var MapController = (function () {
        function MapController(mapDiv) {
            this.mapDiv = mapDiv;
        }
        MapController.prototype.start = function () {
            var point = new Point(-122.45, 37.75);
            point.log();

            var mapOptions = {};
            mapOptions.basemap = "topo";
            mapOptions.center = point;
            mapOptions.zoom = 13;

            this.map = new Map(this.mapDiv, mapOptions);
        };
        return MapController;
    })();
    return MapController;
});
