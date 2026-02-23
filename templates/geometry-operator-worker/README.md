# Map components geometry operator worker sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-components-geometry-operator-worker.zip)** 📁

This project demonstrates using the SDK's geometry operators inside a web worker. You can continue to perform tasks in the user interface while the worker handles potentially resource intensive processing on a background thread. The worker implementation is simplified by using [comlink](https://github.com/GoogleChromeLabs/comlink).

The worker's `geometry-operator-worker.mjs` module is used to query a feature service for river and stream line segments that are contained within a buffer. Then it loops through the features, that are returned from the query, and creates buffers around all the line segments. The segments are then generalized for better serialization performance when the data is passed back to the main thread for display on the map.

## Get started

Run `npm install` to install the dependencies, and then `npm run dev` to see the application in developer mode.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For more details on using the SDK, please refer to the [ArcGIS Maps SDK for JavaScript documentation](https://developers.arcgis.com/javascript/latest/get-started/).

## Learn more

This sample demonstrates how to use geometry operators in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). Web workers allow for CPU intensive code to be run on a background thread to minimize the possibility of degrading the user interface performance.

The [Introduction to geometry operators](https://developers.arcgis.com/javascript/latest/spatial-analysis/intro-geometry-operators/) guide topic offers an overview of the capabilities for performing client-side geometric operations on points, multipoints, lines, polygons and extents.

### How it works

This sample uses a web worker, `geometry-operator-worker.mjs`, to retrieve a FeatureSet of river and creek polyline segments and then it creates a buffer around them.

The web worker is initialized in the `index.html` file using an open-source, Apache 2.0 licensed library called [Comlink](https://github.com/GoogleChromeLabs/comlink) to help simplify the implementation.

```js
// Create a new worker thread that will be used to perform the geometry operations
const geometryOperatorsWorker = new ComlinkWorker(new URL("./geometry-operators-worker.mjs", import.meta.url), {
  name: "geometryOperatorWorker",
  type: "module",
});
```

Comlink provides a simple interface for communicating with the worker. Here a buffer polygon is created around a click point on the map. The buffer is converted to JSON and then passed to the `getRiverBuffers()` method in the worker.

```js
const result = await geometryOperatorWorker.getRiverBuffers(queryBuffer.toJSON());
```

The worker uses a feature service. A query performs a contains operation on the service to return all features that are fully within the buffer polygon. To learn more about the SDK's query parameters see the Query reference page.

```js
const queryParams = {
  geometry: queryBufferPolygon,
  geometryType: "esriGeometryPolygon",
  spatialRel: "esriSpatialRelContains",
  returnGeometry: true,
};

const featureSet = await query.executeQueryJSON(rivers, queryParams);
```

The query returns a FeatureSet of river and creek polyline segments that represent the centerline data for each feature. Then the sample loops through the features and uses the bufferOperator to create a buffer for each segment.

```js
const riverPolyline = new Polyline({
  paths: feature.geometry.paths,
  spatialReference: featureSet.spatialReference,
});

const riverBufferPolygon = bufferOperator.execute(riverPolyline, 200, {
  unit: "meters",
});
```

Both the polylines and their buffers are then generalized. This optional step simplifies the geometry shapes and reduces the number of vertices. It can help with performance when serializing the data that is sent back to the main thread by reducing the number of vertices on the polyline and polygon buffer geometries while still preserving the overall shape.

```js
// Generalize the polylines and buffer polygons to simplify the shape and reduce the number of vertices.
const generalizedPolyline = generalizeOperator.execute(riverPolyline, 10, {
  unit: "meters",
});

const generalizedRiverBufferPolygon = generalizeOperator.execute(riverBufferPolygon, 10, {
  unit: "meters",
});
```

To learn more, see the [Using web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) topic on the Mozilla Developers Network.

## Known issues

- It is recommended to avoid using [top level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) in vanilla Vite applications due to limitations in Rollup production builds that may result in runtime application hangs. There are multiple alternatives. You can use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), async [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), async [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), or use the SDK's events.

## Licensing

Copyright 2025 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/Esri/jsapi-resources/blob/master/license.txt) file.

---

Comlink, Copyright 2017 Google Inc.
https://github.com/GoogleChromeLabs/comlink

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the Apache License Version 2.0 is available in the repository's (LICENSE)](https://github.com/GoogleChromeLabs/comlink/blob/main/LICENSE) file.
