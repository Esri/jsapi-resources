# Sample using @arcgis/webpack-plugin

## Usage

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

### Or add to `types` in `tsconfig.json`.
```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["arcgis-js-api"]
  },
}
```