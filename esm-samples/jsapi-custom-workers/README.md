# ArcGIS API for JavaScript with custom workers

This repo demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) esm modules with custom workers.

## Building workers

The key to using custom workers is that you need to build the workers separately from your main build. In this demo we use Rollup to build the workers and webpack to build the main application.

```js
// rollup.worker.config.js
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: {
    // JSAPI RemoteClient for using workers
    RemoteClient: "@arcgis/core/core/workers/RemoteClient.js",
    // User custom worker
    SpatialJoin: "./src/spatial-join-worker.js"
  },
  output: {
    chunkFileNames: "chunks/worker/[name]-[hash].js",
    dir: "dist",
    // can use loader of choice, but System works well
    // in a production environment
    format: "system",
    exports: "named"
  },
  plugins: [resolve(), commonjs(), production && terser()],
  preserveEntrySignatures: "allow-extension"
};
```

## Using workers

You can then use the workers in your application using the worker framework of the ArcGIS API for JavaScript.

```js
// index.js
import config from "@arcgis/core/config";
...
import * as workers from "@arcgis/core/core/workers";

// configure where RemoteClient is located
config.workers.workerPath = "./RemoteClient.js";

// what loader to use, in this case SystemJS
config.workers.loaderUrl = "https://cdn.jsdelivr.net/npm/systemjs@6.10.0/dist/s.min.js";
...
  const results1= await layerView1.queryFeatures(query);
  const results2 = await layerView2.queryFeatures(query);

  // Load worker
  const spatialJoin = await workers.open(new URL("./SpatialJoin.js", document.baseURI).href);
  // You can only pass native JavaScript objects to workers,
  // so you can convert graphics to JSON.
  const features1 = results1.features.map((a) => a.toJSON());
  const features2 = results2.features.map((a) => a.toJSON());

  const jsonFeatures = await spatialJoin.invoke("doSpatialJoin", [features1, features2]);
  // Results are returned as JSON, so you can rehydrate to Graphics again
  const features = jsonFeatures.map(a => Graphic.fromJSON(a));
```

As you can see, the provided worker framework provides a Promise based layer on top of workers for easier use. Web workers can only pass native JavaScript objects back and forth. But you can load modules from `@arcgis/core` inside your worker.

```js
// spatial-join-worker.js
import Graphic from "@arcgis/core/Graphic";

export function doSpatialJoin([f1, f2]) {
    // rehydrate Graphics
	const features1 = f1.map(a => Graphic.fromJSON(a));
	const features2 = f2.map(a => Graphic.fromJSON(a));
	const features = [];
	let temp = [...features1];
	let temp2 = [];
	for (let feat of features2) {
		const graphic = feat.clone();
		graphic.attributes.count = 0;
		temp2 = [...temp];
		for (let i = 0; i < temp2.length; i++) {
			const x = temp[i];
			if ((x && graphic.geometry && x.geometry) && graphic.geometry.contains(x.geometry)) {
				graphic.attributes.count++;
				temp.splice(i, 1);
			}
		}
        // convert graphics to JSON objects
		features.push(graphic.toJSON());
	}
    return features;
}

```

For more details on using `@arcgis/core/core/workers`, you can review the [documentation](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-workers.html).

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

### development

```
npm run dev
```

### production

```
npm run build
```
