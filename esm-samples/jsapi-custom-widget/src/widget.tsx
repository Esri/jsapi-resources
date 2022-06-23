import { subclass, property } from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";

import { tsx, messageBundle } from "@arcgis/core/widgets/support/widget";

import Point from "@arcgis/core/geometry/Point";
import MapView from "@arcgis/core/views/MapView";
import Widget from "@arcgis/core/widgets/Widget";

type Coordinates = Point | number[] | any;

interface Center {
  x: number;
  y: number;
}

interface State extends Center {
  interacting: boolean;
  scale: number;
}

interface Style {
  textShadow: string;
}

// References the CSS class name set in style.css
const CSS = {
  base: "recenter-tool",
};

interface RecenterParams extends __esri.WidgetProperties {
  view: MapView;
  initialCenter: number[];
}

@subclass("esri.widgets.Recenter")
class Recenter extends Widget {
  // The params are optional
  constructor(params?: RecenterParams) {
    super(params);
  }

  postInitialize() {

    // Set initial State
    this.state = {
      x: 0,
      y: 0,
      interacting: false,
      scale: 0
    };        

    watch(() => [this.view?.center, this.view?.interacting],
    () => {
      this._onViewChange();
    });
  }

  //--------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------
  //----------------------------------
  //  view
  //----------------------------------

  @property()
  view!: MapView;

  //----------------------------------
  //  initialCenter
  //----------------------------------

  @property()
  initialCenter: Coordinates;

  //----------------------------------
  //  state
  //----------------------------------

  @property()
  state!: State;

  //------------------------------------
  //  Configure message bundles
  //------------------------------------

  // ------------------------------------
  // The Vite guide has more information about using the /public directory. 
  // https://vitejs.dev/guide/assets.html#the-public-directory
  // ------------------------------------

  @property()
  @messageBundle("/esm-widget-vite/assets/t9n/widget")
  messages: { title: string; };

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------  
  //------------------------------------
  //  Define the user interface
  //------------------------------------

  render() {
    const { x, y, scale } = this.state;
    const styles: Style = {
      textShadow: this.state.interacting
        ? "-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red"
        : "",
    };
    return (
      <div
        bind={this}
        class={CSS.base}
        styles={styles}
        onclick={this._defaultCenter}
      > <div id='widgetTitle'>{this.messages.title || "Error"}</div>
        <p>x: {Number(x).toFixed(3)}</p>
        <p>y: {Number(y).toFixed(3)}</p>
        <p>scale: {Number(scale).toFixed(3)}</p>
      </div>
    );
  }

  //-------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  private _onViewChange() {
    let { interacting, center, scale } = this.view;
    this.state = {
      x: center.x,
      y: center.y,
      interacting,
      scale,
    };
  }

  private _defaultCenter() {
    this.view.goTo(this.initialCenter);
  }
}

export default Recenter;
