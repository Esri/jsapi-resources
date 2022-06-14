# ArcGIS API for JavaScript with webpack

This repo demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with webpack.


## Known Issues
- `webpack-dev-server` had a [breaking change](https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md#-breaking-changes-4) in `4.0.0` which removed `contentBase` in favor of the `static` option. This sample has been changed accordingly.

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS. Here's a basic CSS example:

*index.css*

```css
@import 'https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`.
