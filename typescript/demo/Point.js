/// <reference path="../esri.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "esri/geometry/Point"], function(require, exports, AGSPoint) {
    

    var Point = (function (_super) {
        __extends(Point, _super);
        function Point() {
            _super.apply(this, arguments);
        }
        //  constructor(public x: number, public y: number) {
        //    super(x, y);
        //  }
        Point.prototype.log = function () {
            console.log(this.type, this.x, this.y);
        };
        return Point;
    })(AGSPoint);
    return Point;
});
