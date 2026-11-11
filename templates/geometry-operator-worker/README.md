# Map components geometry operator worker sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/geometry-operator-worker.zip)** 📁

This sample runs the SDK’s geometry operators in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), keeping resource-intensive processing off the main thread so the interface remains responsive. It uses [`@arcgis/core/core/workers.js`](https://developers.arcgis.com/javascript/latest/references/core/core/workers/#open) to connect to the worker and invoke its methods.

The `src/geometry-operator-worker.js` module queries a feature service for river and stream segments within a buffer, creates buffers around them, and generalizes the geometries before returning them to the main thread for display.

## Get started

Run `npm install`, then `npm run dev` to start the application in development mode.

For all available `npm` commands, see the `scripts` section in `package.json` (for example, `npm run build`).

For details on using the SDK, see the [ArcGIS Maps SDK for JavaScript documentation](https://developers.arcgis.com/javascript/latest/get-started/).

## Learn more

The [Introduction to geometry operators](https://developers.arcgis.com/javascript/latest/spatial-analysis/intro-geometry-operators/) guide describes client-side geometric operations on points, multipoints, lines, polygons, and extents.

### How it works

In `src/main.js`, the SDK's `open()` function from `@arcgis/core/core/workers.js` opens a connection to the worker:

```js
const geometryOperatorConnection = await openConnection(workerUrl.href, { isESM: true });
```

When a user clicks the map, the main thread passes the buffer geometry as JSON to the worker's exported `getRiverBuffers()` function using `invoke()`:

```js
const result = await geometryOperatorConnection.invoke("getRiverBuffers", queryBuffer.toJSON());
```

The worker queries a feature service for features contained within the buffer polygon:

```js
const queryParams = {
  geometry: queryBufferPolygon,
  geometryType: "esriGeometryPolygon",
  spatialRel: "esriSpatialRelContains",
  returnGeometry: true,
};

const featureSet = await query.executeQueryJSON(rivers, queryParams);
```

The query returns river and creek polyline segments representing each feature's centerline. The worker uses `bufferExecute()` to create a buffer around each segment.

```js
const riverPolyline = new Polyline({
  paths: feature.geometry.paths,
  spatialReference: featureSet.spatialReference,
});

const riverBufferPolygon = bufferExecute(riverPolyline, 200, {
  unit: "meters",
});
```

The worker generalizes both the polylines and their buffers. This reduces the number of vertices to improve serialization and rendering performance while preserving the overall shapes.

```js
// Generalize the polylines and buffer polygons to simplify the shape and reduce the number of vertices.
const generalizedPolyline = generalizeExecute(riverPolyline, 10, {
  unit: "meters",
});

const generalizedRiverBufferPolygon = generalizeExecute(riverBufferPolygon, 10, {
  unit: "meters",
});
```

For more information, see MDN's [Using web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) guide.

## Licensing

Copyright 2014-2026 Esri

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
