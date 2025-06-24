# ArcGIS Maps SDK for JavaScript with Angular CLI

This sample demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular.

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-jsapi-angular-cli.zip)** 📁

Run `npm install` and then start adding functionality.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

## Known issues

- If you encounter the error message `TS1203: Export assignment cannot be used when targeting ECMAScript modules` on an SDK module then update to SDK version 4.32 or greater. One temporary workaround is to set `skipLibCheck` to `true`. This setting will reduce type-system accuracy. More information is available here: https://www.typescriptlang.org/tsconfig/#skipLibCheck.

- When deploying Angular 19 apps into production environments, for best performance it is recommended to ensure your webserver environment is using [HTTP/2](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2) or [HTTP/3](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3). For more information: https://esbuild.github.io/api/#splitting.

- The compile warning `The glob pattern import("./**/*.entry.js*") did not match any files [empty-glob]` is a known issue with Stencil and it can be ignored.

- It is recommended to update to zone.js `0.14.5` or later. Earlier versions of zone.js will cause some of the SDK's widget buttons to not work correctly due to an [Angular bug](https://github.com/angular/angular/issues/54581) affecting `.on*` event listeners. If you are unable to update zone.js, a potential workaround is to disable monkey patching of DOM `click` event. Make the following updates and be sure to test thoroughly for unexpected side effects.

_src/zone-flags.ts_ - add this file to your project:

```ts
(window as any).__zone_symbol__UNPATCHED_EVENTS = ["click"];
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

- Due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality prior to version 4.32 works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors. See the [Autocasting in TypeScript](https://developers.arcgis.com/javascript/latest/autocasting/#autocasting-in-typescript) guide topic for more information.

- In order to use the APIs TypeScript [decorators](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html), set the [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) option to `false` in `tsconfig.compilerOptions`.
