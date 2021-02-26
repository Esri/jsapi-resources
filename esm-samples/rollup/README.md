# ArcGIS API for JavaScript with rollup

This repo demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) esm modules with rollup.

Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) so that the assets are correctly resolved, for example:

```js
import esriConfig from '@arcgis/core/config.js';

esriConfig.assetsPath = './assets'; 
```

The `rollup.config.js` file handles the copying of the API's assets for watch and build.

```js

import copy from 'rollup-plugin-copy';

plugins: [
  ...
    copy({
      // Copy the ArcGIS APi for JavaScript assets
      targets: [
        { src: './node_modules/@arcgis/core/assets', dest: './public'},
      ],
      copyOnce: true
    }), 
  ...
]

```