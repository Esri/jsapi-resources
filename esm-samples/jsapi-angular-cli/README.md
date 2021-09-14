# ArcGIS API for JavaScript with Angular CLI

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular 12. 

---
## Known issues

* If you are seeing `404` errors in the console after updating Angular `12.1.x` dependencies, you should try clearing your browser cache. This is an Angular caching issue. 

* There is an optimization bug affecting production builds at Angular `12.2.x`. It is recommended to stay at Angular `12.1.x` until Angular 13 is ready. For more information: https://github.com/Esri/feedback-js-api-next/issues/131.

* To prevent `Unhandled Promise Rejection` errors when using Angular with Zone.js, upgrade to Angular `11.2.5` or greater, Zone.js `0.11.4`or greater, and switch the `tsconfig.target` to `es2017` or greater.

* if you are seeing CommonJS or AMD dependency warnings you can supress them in your build output thought a property setting in `angular.json`. Suppressing won't affect functionality. Also, consider upgrading by running `npm i @arcgis/core@latest`.

*angular.json*

```json
  "allowedCommonJsDependencies": [
    "moment"
  ],
```
---

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS.

*styles.css*

```css
  @import 'https://js.arcgis.com/4.21/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Requirements

* If you are using Zone.js, the minimum version is `0.11.4 (February 10, 2021)` or greater.

## TypeScript

Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors.

Minimum required version is `~4.2.3`.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

### Development server

Run `ng serve --open` for a dev server that will automatically open a browser window. The app will automatically reload if you change any of the source files. You need to install [Angular CLI](https://cli.angular.io/) before you can compile the app. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
