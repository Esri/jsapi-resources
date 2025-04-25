# ArcGIS Maps SDK for JavaScript with Rollup

This sample demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with Rollup.

## Get Started

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/core-sample-rollup.zip)** 📁

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`, e.g. `npm run build`.

For additional information, see the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/#api) Guide topic in the SDK.

## Known Issues

- At version 4.32.0 or greater, in order to avoid runtime errors, such as `Uncaught ReferenceError: process is not defined`, use `@rollup/plugin-replace` and update your config file under `plugins`:

```json
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
```

- It is recommended to avoid using [top level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) due to limitations in Rollup that may result in runtime application hangs. There are multiple alternatives. You can use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), async [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), async [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), or use the SDK's events.

## TypeScript

This example can also be used with TypeScript sources. The following steps convert the example into a TypeScript starter.

- Rename src/main.js to src/main.ts
- Change npm packages
- `npm install -D @rollup/plugin-typescript`
- `npm install -D tslib`
- `npm install -D typescript`
- Edit both rollup.config.js and rollup.config.prod.js
- Add `import typescript from "@rollup/plugin-typescript";`
- Change `input: "src/main.js",` to `input: "src/main.ts",`
- Add `typescript()` to the end of the `plugins` array
- Create a file called `tsconfig.json` in the root directory of your project:

```json
{
  "compilerOptions": {
    "allowUnreachableCode": false,
    "declaration": false,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["dom", "dom.iterable", "es2023"],
    "module": "es2020",
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "es2023"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

6. Note that the watch feature of `npm start` will not catch your TypeScript changes; you need to use `npm run watch` instead.

## Experimental

In `rollup.config.prod.js`, you can try fine tuning the [`output.experimentalMinChunkSize`](https://rollupjs.org/configuration-options/#output-experimentalminchunksize). Using a setting of `100_000` with this sample resulted in approximately 57% reduction in the number of `.js` files requested. There was also an increase in total `.js` loaded of approximately 230 KB. Depending on your application and other environment factors such as internet download speeds, this may result in a slight decrease in loading time.
