# ArcGIS Maps SDK for JavaScript with rollup

This sample demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with rollup.

## Known Issues
- At 4.27, we removed CommonJS dependencies from the sample's build pipeline.
- If you are using rollup `3.14.0` - `3.16.0`, to improve bundling performance set the `output.experimentalDeepDynamicChunkOptimization` flag to `true`. Reference this rollup [pull request](https://github.com/rollup/rollup/pull/4837). This issue can also be resolved by upgrading to `3.17.0`+.
- It is recommended to upgrade `@rollup/plugin-terser` to `v0.4.0` or later. Previous versions have noticeably slower performance compared to `rollup-plugin-terser`. More information is available in the plugin's [CHANGELOG](https://github.com/rollup/plugins/blob/master/packages/terser/CHANGELOG.md#v040).

## Get Started

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## TypeScript
This example can also be used with TypeScript sources. The following steps convert the example into a TypeScript starter.

1. Rename src/main.js to src/main.ts
2. Change npm packages
 1. `npm install -D @rollup/plugin-typescript`
 2. `npm install -D tslib`
 3. `npm install -D typescript`
3. Edit both rollup.config.js and rollup.config.prod.js
 1. Add `import typescript from "@rollup/plugin-typescript";`
 2. Change `input: "src/main.js",` to `input: "src/main.ts",`
 3. Add `typescript()` to the end of the `plugins` array
4. Create a file called `tsconfig.json` in the root directory of your project:
```json
{
  "compilerOptions": {
    "allowUnreachableCode": false,
    "declaration": false,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["dom", "dom.iterable", "es2021"],
    "module": "es2020",
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "es2021"
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
6. Note that the watch feature of `npm start` will not catch your TypeScript changes; you need to use `npm run watch` instead.

## Experimental

In `rollup.config.prod.js`, you can try fine tuning the [`output.experimentalMinChunkSize`](https://rollupjs.org/configuration-options/#output-experimentalminchunksize). Using a setting of `100_000` with this sample resulted in a roughly 17% reduction in the number of `.js` files requested. Depending on your application and other environment factors such as internet download speeds, this may result in a slight decrease in loading time.
