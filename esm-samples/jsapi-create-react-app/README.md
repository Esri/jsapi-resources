# ArcGIS API for JavaScript with create-react-app

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with `create-react-app`.

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS. Here's a React example:

*index.css*

```css
@import 'https://js.arcgis.com/4.22/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`.

## Misc.

If you run into issues with babel helpers injected into ArcGIS API for JavaScript code during the build using `create-react-app`, but helpers not being copied to the build, you can try using the following browserslist configuration.

```json
// package.json
{
  "browserslist": {
    "production": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
}
```

If you run in to issues with this method, you can use [react-app-rewired](https://www.npmjs.com/package/react-app-rewired).

```js
// config-overrides.js
module.exports = function override(config, env) {
  // Tell create-react-app not to run node_modules through babel.
  // May vary based on version of create-react-app being used.
  config.module.rules[2].oneOf[2].exclude = /(@babel(?:\/|\\{1,2})runtime|node_modules)/;
  return config;
}
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
