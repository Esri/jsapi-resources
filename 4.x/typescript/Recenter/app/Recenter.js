define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/core/watchUtils", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget_1, watchUtils_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Widget_1 = tslib_1.__importDefault(Widget_1);
    watchUtils_1 = tslib_1.__importDefault(watchUtils_1);
    const CSS = {
        base: "recenter-tool"
    };
    let Recenter = class Recenter extends Widget_1.default {
        constructor(params) {
            super(params);
            this._onViewChange = this._onViewChange.bind(this);
        }
        postInitialize() {
            watchUtils_1.default.init(this, "view.center, view.interacting, view.scale", () => this._onViewChange());
        }
        //-------------------------------------------------------------------
        //
        //  Public methods
        //
        //-------------------------------------------------------------------
        render() {
            const { x, y, scale } = this.state;
            const styles = {
                textShadow: this.state.interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
            };
            return ((0, widget_1.tsx)("div", { bind: this, class: CSS.base, styles: styles, onclick: this._defaultCenter },
                (0, widget_1.tsx)("p", null,
                    "x: ",
                    Number(x).toFixed(3)),
                (0, widget_1.tsx)("p", null,
                    "y: ",
                    Number(y).toFixed(3)),
                (0, widget_1.tsx)("p", null,
                    "scale: ",
                    Number(scale).toFixed(5))));
        }
        //-------------------------------------------------------------------
        //
        //  Private methods
        //
        //-------------------------------------------------------------------
        _onViewChange() {
            let { interacting, center, scale } = this.view;
            this.state = {
                x: center.x,
                y: center.y,
                interacting,
                scale
            };
        }
        _defaultCenter() {
            this.view.goTo(this.initialCenter);
        }
    };
    tslib_1.__decorate([
        (0, decorators_1.property)()
    ], Recenter.prototype, "view", void 0);
    tslib_1.__decorate([
        (0, decorators_1.property)()
    ], Recenter.prototype, "state", void 0);
    Recenter = tslib_1.__decorate([
        (0, decorators_1.subclass)("esri.widgets.Recenter")
    ], Recenter);
    exports.default = Recenter;
});
