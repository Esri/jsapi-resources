# Recenter custom widget (AMD)

This tutorial goes over creating a custom widget using the APIs AMD modules. The widget displays the [MapView.center](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#center)'s X/Y coordinates in addition to its [MapView.scale](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#scale). The view can also be recentered by clicking on the widget.

> :warning: **NOTE:** It is recommended to use @arcgis/core ES modules for all new projects. An example of a custom widget using ES modules is in the [esm-samples directory](../../../esm-samples/jsapi-custom-widget/).

## Before you begin

If this is your first time creating a custom widget, please refer to the either the introductory [demo](../demo) app located within this repository for steps on how to get started with the API when using TypeScript.

This tutorial will assume that all the necessary [requirements](https://developers.arcgis.com/javascript/latest/custom-widget/#development-requirements) are installed.

Also, for a detailed discussion on setting up TypeScript within your environment, please refer to the [TypeScript Setup guide topic](https://developers.arcgis.com/javascript/latest/typescript-setup/) within the ArcGIS Maps SDK for JavaScript.

The proceeding steps will begin with implementing the widget in the .tsx file.

## Usage

### Implement Recenter TSX file

#### Add dependency paths and import statements

```ts
import { subclass, property } from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");
import { init } from "esri/core/watchUtils";

import { tsx } from "esri/widgets/support/widget";

import Point = require("esri/geometry/Point");
import MapView = require("esri/views/MapView");
```

#### Create a type alias and interfaces

First we're going to create a `Coordinates` type alias. `Coordinates` is an [esri/geometry/Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) type that takes an array of numbers or `any`. The latter is specified because the [Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) constructor also takes in other types besides just numbers.

```ts
type Coordinates = Point | number[] | any;
```

Next, we will create a few [TypeScript interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html) to aid in reusing object types.

```ts
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

interface RecenterParams extends __esri.WidgetProperties {
  view: MapView;
  initialCenter: number[];
}
```

1.  The first interface, `Center`, takes two number properties, `x` and `y`.
2.  Next, `State` extends off of `Center`. This means that it will have the same `x` and `y` properties that `Center` has, in addition to a boolean property called `interacting` and a number property called `scale`.
3.  Next, an interface called `Style` takes one string property called `textShadow`.
4.  Lastly, we create a type for the Recenter constructor parameters.

#### Add CSS variable

After adding the interfaces and type alias, set a `CSS` variable with a `base` property. This is used within the widget's [render()](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render) method.

```ts
const CSS = {
  base: "recenter-tool"
};
```

#### Extend Widget base class with constructor logic

Now in the [Recenter.tsx](app/Recenter.tsx) file, add the following lines of code.

```ts
@subclass("esri.widgets.Recenter")
class Recenter extends Widget {
  constructor(params?: RecenterParams) {
    super(params);
    this._onViewChange = this._onViewChange.bind(this);
  }
```

Here, we are extending the [Widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html) base class.The [@subclass](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#subclass) decorator is for constructing subclasses off of a given base class. The [Custom Widget guide topic](https://developers.arcgis.com/javascript/latest/custom-widget/#subclass) has more information on using @subclass.

The constructor logic is binding the `_onViewChange()` method to `this` widget instance.

#### Add postInitialize logic

The [postInitialize](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize) method is called after the widget is created but before the UI is rendered. In this particular case, we will initialize [watchUtils](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-watchUtils.html#init) to watch for changes to the `View's` [center](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#center), [interacting](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#interacting), and [scale](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#scale) properties in which it then calls the method, `_onViewChange`.

Add the following code to handle this,

```ts
override postInitialize() {
  watchUtils.init(this, "view.center, view.interacting, view.scale", () => this._onViewChange());
}
```

#### Add widget properties

Within this class implementation, add these properties:

```ts

//----------------------------------
//  view
//----------------------------------

@property()
view: MapView;

//----------------------------------
//  initialCenter
//----------------------------------

@property()
initialCenter: Coordinates;

//----------------------------------
//  state
//----------------------------------

@property()
state: State;

```

All of these properties have a [@property](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#property) decorator. This is used to define an [Accessor](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html) property. By specifying this decorator within the property, you give this property the same behavior as other [properties within the API](https://developers.arcgis.com/javascript/latest/programming-patterns/#properties).

In addition, you may notice that these properties are set to return an interface type or type alias specified in the beginning of this tutorial. For example, the `state` property is of type `State` which took two `x` and `y` number properties in addition to boolean `interacting` and number `scale` properties.

#### Add widget methods

Now, you will add both public and private methods to the widget.

```ts

// Public method
override render() {
  const {x, y, scale} = this.state;
  const styles: Style = {
    textShadow: this.state.interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
  };
  return (
  <div
    bind={this}
    class={CSS.base}
    styles={styles}
    onclick={this._defaultCenter}>
    <p>x: {Number(x).toFixed(3)}</p>
    <p>y: {Number(y).toFixed(3)}</p>
    <p>scale: {Number(scale).toFixed(5)}</p>
  </div>
  );
}
```

```ts
// Private methods

private _onViewChange() {
  let { interacting, center, scale } = this.view;
  this.state = {
    x: center.x,
    y: center.y,
    interacting,
    scale
  };
}

private _defaultCenter() {
  this.view.center = this.initialCenter;
}
```

The [render()](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render) method is the only required member of the API that must be implemented and overriden with the custom functionality. This method must return a valid UI representation. [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) is used to define the UI. With this said, it is important to note that we are not using [React](https://reactjs.org/). The transpiled JSX is processed using a custom [JSX factory](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-support-widget.html#tsx) therefore there is no direct equivalency between implementing a custom Widget and a React component.

The snippet above creates a `style` variable of type `Style`. The `textShadow` property updates to the specified string value upon interaction. In addition, three variables: `x`, `y`, and `scale` are set to the values of `this.state`.

The UI is rendered based on the specified `div` element attributes:

1.  First, the `bind` attribute is set to `this`, e.g. `bind={this}`.
2.  Next, `class` is set to the `CSS.base` value, i.e. "recenter-tool".
3.  The `styles` will reflect the `textShadow` property set a few lines prior.
4.  The `onclick` event (note the lower case 'c'), is set to call the private `_defaultCenter` method once the widget is clicked.
5.  Lastly, the widget UI itself will display the `x: <value>`, `y: <value>`, and `scale: <value>` of the current view.

#### Export widget

At the very end of the code page, add a line to [export](https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require) the object into an easily-consumable external module.

```ts
export = Recenter;
```

### 2. Compiling the TSX file

Now that the widget's code is implemented, use the TypeScript compiler to compile the _.tsx_ file to its underlying JavaScript implementation.

In the command prompt, browse to the location of this sample directory and type `npm run build`. This compiles any specified _.tsx_ files within the _tsconfig.json_'s files to their equivalent _.js_ files. You should now have a new _Recenter.js_ file generated in the same directory as its _.tsx_ file.

### 3. Add the widget to the application

Now that you generated the underlying _.js_ file for the widget, it can be added into your JavaScript application. In the same _Recenter_ directory, create an _index.html_ file.

#### Add CSS

The widget references the `.recenter-tool' class. Add a style element that references this class as seen below.

```css
.recenter-tool {
  padding: 2em;
  position: absolute;
  top: 1em;
  right: 1em;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.recenter-tool > p {
  margin: 0;
}
```

#### Add the custom widget reference

Once you've created the custom widget, you need to load it. This comes down to telling the API's AMD module loader how to resolve the path for your widget which means mapping a module identifier to a file on your web server. Sitepen has [documentation](https://dojotoolkit.org/reference-guide/1.10/loader/amd.html) and [tutorials](https://dojotoolkit.org/documentation/tutorials/1.10/dojo_config/index.html) on working with the Dojo loader.

Add a script element that handles loading the custom widget:

```js
<script>
// Find the absolute URL of the page where the app is running
const locationPath = location.pathname.replace(/\/[^\/]+$/, "");
window.dojoConfig = {
  packages: [
    {
      name: "app",
      location: locationPath + "/app"
    }
  ]
};
</script>

```

#### Reference and use the custom widget

Now that the API knows where to find modules in the [app](app) folder, `require` can be used to load the `app/Recenter` module along with other modules used by the application.

```js
require([
  "esri/Map",
  "esri/views/MapView",
  "app/Recenter", // References the custom widget's module
  "esri/layers/VectorTileLayer"
], (Map, MapView, Recenter, VectorTileLayer) => {
  let map, view;
});
```

Last, initialize the `Recenter` widget then add it to the `view.ui` to place the widget at the `top-right` of the map.

```js
const recenter = new Recenter({
  view: view,
  initialCenter: [-100.33, 43.69]
});
view.ui.add(recenter, "top-right");
```
