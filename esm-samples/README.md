# @arcgis/core

The projects in this directory are samples that integrate the [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) build of the ArcGIS API for JavaScript with various frameworks, module bundlers and build tools. 

## Get started

Install the modules into your project:

```js
npm install @arcgis/core
```

Then use `import` statements to load individual modules.

```js
import WebMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv", 
  map: map 
});
```

## Copy assets

Make sure to copy the API’s assets, which includes styles, images, fonts, and localization files from the `@arcgis/core/assets` folder to your build directory. A simple way to accomplish this is to configure an NPM script that runs during your build process. For example, use npm to install `ncp` and configure a script in `package.json` to copy the assets folder. Here’s a React example:

```js

// package.json
{
    "script": {
        "start": "npm run copy && react-scripts start",
        "build": "npm run copy && react-scripts build",
        "copy": "ncp ./node_modules/@arcgis/core/assets ./assets"
    }
}
```

When assets are loaded from paths that are different than the default location (e.g. `./assets`), set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) to insure the paths are correctly resolved. Examples include when using multiple routes in Angular, or when you need to relocate the assets because of project requirements.

```js
import config from '@arcgis/core/config.js';

// Assets have been moved from the default location
config.assetsPath = '/public/assets';
```

## Configure CSS

The final step is to set up the CSS. Choose a theme and then configure your code to copy the theme files from @arcgis/core/assets/esri/themes/ into your project. Here’s a React example:

```js
// React - index.js
import '@arcgis/core/assets/esri/themes/dark/main.css';
```