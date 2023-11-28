# ArcGIS Maps SDK for JavaScript with Angular CLI

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular. 

## Get Started

Run `npm install` and then start adding functionality.

For a list of all available `npm` commands see `scripts` in `package.json`.

## Known issues

* The Maps SDK compatibility with Webpack versions prior to `5.84.0` was deprecated at 4.27 and will be removed at 4.29 (Q1 2024).

* When using Angular 17, for better application load performance with distribution builds it is recommended to use the [Webpack builder](https://angular.io/guide/esbuild#using-the-application-builder) instead of the default esbuild configuration. This can be configured in the project's `angular.json` file. At this time esbuild does not offer the ability to customize chunking. That may result in the creation of a significant number of small on-disk bundled files, as well as an increase in the number of files requested by the application at startup. Here is an example snippet:

*angular.json - Webpack configuration*

```json
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
``` 

* Some of the SDKs widgets may not work correctly in Angular 16+. This is due to a Calcite bug affecting the enabling/disabling buttons via two-way data binding: https://github.com/Esri/calcite-design-system/issues/7729. The bug applies to all Calcite versions greater than `1.2.0`. A temporary workaround is to disable zone.js monkey patching of DOM `click` events by setting this flag: `windows.__zone_symbol__UNPATCHED_EVENTS = ['click']`. More information is available in [Issue #481](https://github.com/Esri/jsapi-resources/issues/481#issuecomment-1687048980).

* Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors.

* In order to use the APIs TypeScript [decorators](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html), set the [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) option to `false` in `tsconfig.compilerOptions`.

* If you are seeing CommonJS or AMD dependency warnings you can supress them in your build output through a property setting in `angular.json`, this won't affect functionality. This may not be needed if you upgrade to Angular 15+. Also, consider upgrading to the latest version of the ArcGIS JS API by running `npm i @arcgis/core@latest`.

*angular.json*

```json
  "allowedCommonJsDependencies": [
    "moment"
  ],
```