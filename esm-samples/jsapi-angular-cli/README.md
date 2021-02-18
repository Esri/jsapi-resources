# ArcGIS API for JavaScript with Angular CLI

**Note:** we currently recommend setting `buildOptimizer: false` in `angular.json`. This prevents WebGL errors such as `WebGL: INVALID_OPERATION` and `WebGL: INVALID_ENUM`. It may increase your on-disk and loaded application size.

---

## jsapi-angular-cli

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular 11. 

**Step 1** - Run `npm install`. 

**Step 2** Copy assets - There are several small changes to this repo that enable the JS API to work. In `angular.json` copy the JS API assets folder to `/assets`. And, under build > options > allowedCommonJsDependencies you can add `moment` to the array to suppress `CommonJS or AMD dependencies` warnings in dev builds.

```json
  "allowedCommonJsDependencies": [
    "moment"
  ],
  "assets": [
    {
      "glob": "**/*",
      "input": "node_modules/@arcgis/core/assets",
      "output": "/assets/"
    },
    "src/favicon.ico",
    "src/assets"
  ],

```

**Step 3** Configure CSS. Choose a [theme](https://developers.arcgis.com/javascript/latest/guide/styling/index.html#themes) and then configure your code to copy the theme files from `@arcgis/core/assets/esri/themes/` into your project.  If you want to apply the CSS globally then add it to `angular.json` and it will automatically be accessible for any components using the JS API:

```json
  "styles": [
    "src/styles.scss",
    "node_modules/@arcgis/core/assets/esri/themes/light/main.css"
  ],
```

To use the CSS at a component-level, set a CSS link in `index.html`:

```javascript
  <link rel="stylesheet" href="assets/esri/themes/dark/main.css">
```

**Step 4** Set the base url for the assets folder so they are correctly resolved. When working with routes, use a path that is not relative to the page's path, e.g. `/assets`.

```javascript
import esriConfig from "@arcgis/core/config.js";

  . . .

  ngOnInit(): any {
    esriConfig.assetsPath = "/assets"; //assuming assets are in /assets
  }
```

## Development server

Run `ng serve --open` for a dev server that will automatically open a browser window. The app will automatically reload if you change any of the source files. You need to install [Angular CLI](https://cli.angular.io/) before you can compile the app. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
