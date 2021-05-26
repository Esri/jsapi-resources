[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](http://github.com/badges/stability-badges)


# Sample using @arcgis/webpack-plugin (Deprecated)

## Usage

**Deprecation Notice**: if you are planning on building a new application, we recommend using the [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules, here is a [sample application](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/webpack).

```
npm install

# run local dev server
npm start

# create a production build
npm run build
```

## TypeScript Typings

Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors. 

You can use the typings included with `arcgis-js-api` two ways. 

### Include a `///` directive in your main TypeScript file.
```ts
// main.ts
/// <reference types="arcgis-js-api" />
```

### Or add to the `include` of your `tsconfig.json`.
```json
// tsconfig.json
{
  "compilerOptions": {},
  "include": [
    "node_modules/arcgis-js-api/index.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```