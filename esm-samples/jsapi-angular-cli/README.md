# ArcGIS API for JavaScript with Angular CLI

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular 11. 

---
**Known issues**

* We are aware of a general issue with `Unhandled Promise Rejection` errors. They aren't specific to Angular and shouldn't affect ArcGIS JS API functionality. Upgrade to `11.2.5`+ and switch the `tsconfig.target` to es2017.

* if you are seeing CommonJS or AMD dependency warnings you can supress them in your build output thought a property setting in `angular.json`. Suppressing won't affect functionality. Also, consider upgrading by running `npm i @arcgis/core@latest`.

*angular.json*

```json
  "allowedCommonJsDependencies": [
    "moment"
  ],
```
---

## Get Started

**Step 1** - Run `npm install`. 

**Step 2** Configure CSS. Choose a [theme](https://developers.arcgis.com/javascript/latest/guide/styling/index.html#themes) then apply it to your css. Here's a component CSS example:

*index.html*

```html
  <link rel="stylesheet" href="https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/dark/main.css">
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

### Development server

Run `ng serve --open` for a dev server that will automatically open a browser window. The app will automatically reload if you change any of the source files. You need to install [Angular CLI](https://cli.angular.io/) before you can compile the app. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
