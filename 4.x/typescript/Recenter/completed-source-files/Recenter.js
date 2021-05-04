define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/core/watchUtils", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget, watchUtils, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CSS = {
        base: "recenter-tool"
    };
    var Recenter = /** @class */ (function (_super) {
        tslib_1.__extends(Recenter, _super);
        function Recenter(params) {
            var _this = _super.call(this, params) || this;
            _this._onViewChange = _this._onViewChange.bind(_this);
            return _this;
        }
        Recenter.prototype.postInitialize = function () {
            var _this = this;
            watchUtils.init(this, "view.center, view.interacting, view.scale", function () { return _this._onViewChange(); });
        };
        //-------------------------------------------------------------------
        //
        //  Public methods
        //
        //-------------------------------------------------------------------
        Recenter.prototype.render = function () {
            var _a = this.state, x = _a.x, y = _a.y, scale = _a.scale;
            var styles = {
                textShadow: this.state.interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
            };
            return (widget_1.tsx("div", { bind: this, class: CSS.base, styles: styles, onclick: this._defaultCenter },
                widget_1.tsx("p", null,
                    "x: ",
                    Number(x).toFixed(3)),
                widget_1.tsx("p", null,
                    "y: ",
                    Number(y).toFixed(3)),
                widget_1.tsx("p", null,
                    "scale: ",
                    Number(scale).toFixed(5))));
        };
        //-------------------------------------------------------------------
        //
        //  Private methods
        //
        //-------------------------------------------------------------------
        Recenter.prototype._onViewChange = function () {
            var _a = this.view, interacting = _a.interacting, center = _a.center, scale = _a.scale;
            this.state = {
                x: center.x,
                y: center.y,
                interacting: interacting,
                scale: scale
            };
        };
        Recenter.prototype._defaultCenter = function () {
            this.view.goTo(this.initialCenter);
        };
        tslib_1.__decorate([
            decorators_1.property()
        ], Recenter.prototype, "view", void 0);
        tslib_1.__decorate([
            decorators_1.property()
        ], Recenter.prototype, "state", void 0);
        Recenter = tslib_1.__decorate([
            decorators_1.subclass("esri.widgets.Recenter")
        ], Recenter);
        return Recenter;
    }(Widget));
    exports.default = Recenter;
});
//# sourceMappingURL=Recenter.js.map