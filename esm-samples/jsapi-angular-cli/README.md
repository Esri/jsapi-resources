# ArcGIS Maps SDK for JavaScript with Angular CLI

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular. 

- *NOTE:* Compatibility with Webpack versions prior to `5.84.0` was deprecated at 4.27.

---
## Known issues

* Some of the SDKs widgets may not work correctly in Angular 16+. This is due to a Calcite bug affecting the enabling/disabling buttons via two-way data binding: https://github.com/Esri/calcite-design-system/issues/7729. The bug applies to all Calcite versions greater than `1.2.0`. A temporary workaround is to disable zone.js monkey patching of DOM `click` events by setting this flag: `windows.__zone_symbol__UNPATCHED_EVENTS = ['click']`. More information is available in [Issue #481](https://github.com/Esri/jsapi-resources/issues/481#issuecomment-1687048980).

* In order to use the APIs TypeScript [decorators](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html), set the [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) option to `false` in `tsconfig.compilerOptions`.

* If you are seeing CommonJS or AMD dependency warnings you can supress them in your build output through a property setting in `angular.json`, this won't affect functionality. This may not be needed if you upgrade to Angular 15+. Also, consider upgrading to the latest version of the ArcGIS JS API by running `npm i @arcgis/core@latest`.

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
  @import 'https://js.arcgis.com/4.27/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## TypeScript

Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors.

This sample implements strict class initalization, for more information visit the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization) page.

Check the online Angular documentation for their minimum TypeScript requirements for each release.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

### Development server

Run `ng serve --open` for a dev server that will automatically open a browser window. The app will automatically reload if you change any of the source files. You need to install [Angular CLI](https://cli.angular.io/) before you can compile the app. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
