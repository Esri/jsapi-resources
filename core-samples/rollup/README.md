# ArcGIS Maps SDK for JavaScript with rollup

This sample demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with rollup.

## Get Started

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/#api) Guide topic in the SDK.

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
    "lib": ["dom", "dom.iterable", "es2022"],
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

In `rollup.config.prod.js`, you can try fine tuning the [`output.experimentalMinChunkSize`](https://rollupjs.org/configuration-options/#output-experimentalminchunksize). Using a setting of `100_000` with this sample resulted in approximately 57% reduction in the number of `.js` files requested. There was also an increase in total `.js` loaded of approximately 230 KB. Depending on your application and other environment factors such as internet download speeds, this may result in a slight decrease in loading time.
