# Visual Studio Code IntelliSense

This page describes how to set up IntelliSense in Visual Studio Code for the ArcGIS Maps SDK for JavaScript component packages.

![alt text](/images/intellisense.png)

## HTML

For IntelliSense in HTML, add the following to the `.vscode/settings.json` file in your project:

```json
{
  "html.customData": [
    "./node_modules/@arcgis/<package-name>/dist/docs/vscode.html-custom-data.json"
  ],
}
```

In the case of [`@arcgis/map-components`](https://developers.arcgis.com/javascript/latest/references/map-components/), replace `<package-name>` with `map-components`.

`vscode.html-custom-data.json` - Provides a list of components and their attributes.

The instructions for setting up HTML IntelliSense apply to projects that load components either via the [ArcGIS CDN](https://next.sites.afd.arcgis.com/javascript/latest/get-started-cdn/) or through [npm](https://next.sites.afd.arcgis.com/javascript/latest/get-started-npm/).

> [!TIP]
> These instructions are for a "per project" basis and are not available globally in VS Code.
> Similar logic for these instructions can be applied when using [`@esr/calcite-components`](https://developers.arcgis.com/calcite-design-system/resources/frameworks/#visual-studio-intellisense).

## JavaScript and TypeScript

### Loading components via the ArcGIS CDN

In a project that loads components via the ArcGIS CDN, JavaScript Intellisense will only be available for the components if your JavaScript is in a separate file from your HTML.

Example:

```html
<!-- Index.html -->
<body>
  <!-- IntelliSense available for the components and their attributes -->
  <arcgis-map item-id="d5dda743788a4b0688fe48f43ae7beb9">
    <arcgis-expand position="top-right">
      <arcgis-search></arcgis-search>
    </arcgis-expand>
    <arcgis-legend position="bottom-left"></arcgis-legend>
  </arcgis-map>
  <!-- Go to main.js for JavaScript IntelliSense -->
  <script type="module" src="/main.js"></script>
</body>
```

```js
// main.js
const mapElement = document.querySelector("arcgis-map");
// Try typing mapElement.map below and see IntelliSense in action
```

### Loading components via npm

In a project that loads components via npm, you will get IntelliSense in your JavaScript or TypeScript file as soon as you import a component from a package such as the `@arcgis/map-components`.

Example:

```html
<!-- Index.html -->
<body>
  <!-- IntelliSense available for the components and their attributes -->
  <arcgis-map item-id="d5dda743788a4b0688fe48f43ae7beb9">
    <arcgis-expand position="top-right">
      <arcgis-search></arcgis-search>
    </arcgis-expand>
    <arcgis-legend position="bottom-left"></arcgis-legend>
  </arcgis-map>
  <!-- Go to main.js for JavaScript IntelliSense -->
  <script type="module" src="/main.js"></script>
</body>
```

```js
// main.js
import "@arcgis/map-components/components/arcgis-map";

const mapElement = document.querySelector("arcgis-map");
// Try typing mapElement.map below and see IntelliSense in action
``` 

### ArcGIS Maps SDK for JavaScript core API

Once a module has been imported, then the API's TypeScript types are automatically inferred, you don't need to set type annotations for every declaration. 

```ts
// main.js
import WebMap from "@arcgis/core/WebMap.js";

const webmap = new WebMap({
  portalItem: { // autocasts as new PortalItem()
    id: "e691172598f04ea8881cd2a4adaa45ba"
  }
});
```