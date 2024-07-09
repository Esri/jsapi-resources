# ArcGIS Maps SDK for JavaScript with Angular CLI

This sample demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular. 

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-angular-cli.zip)** 📁

Run `npm install` and then start adding functionality.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

## Known issues
* When deploying Angular 18 apps into production environments, it is recommended to ensure your webserver environment is using [HTTP/2](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http2_%E2%80%93_a_protocol_for_greater_performance). This is due to esbuild [code splitting](https://esbuild.github.io/api/#splitting).

* It is recommended to update to zone.js `0.14.5` or later. Earlier versions of zone.js will cause some of the SDK's widget buttons to not work correctly due to an [Angular bug](https://github.com/angular/angular/issues/54581) affecting `.on*` event listeners. If you are unable to update zone.js, a potential workaround is to disable monkey patching of DOM `click` event. Make the following updates and be sure to test thoroughly for unexpected side effects.

_src/zone-flags.ts_ - add this file to your project:

```ts
(window as any).__zone_symbol__UNPATCHED_EVENTS = ['click'];
```

_angular.json_

```json
  "polyfills": [
    "src/zone-flags.ts",
    "zone.js"
  ],
```

_tsconfig.app.json_

```json
  "files": [
    "src/zone-flags.ts",
    "src/main.ts"
  ],
```

* Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors.

* In order to use the APIs TypeScript [decorators](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html), set the [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) option to `false` in `tsconfig.compilerOptions`.
