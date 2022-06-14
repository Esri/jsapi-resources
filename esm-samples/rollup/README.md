# ArcGIS API for JavaScript with rollup

This repo demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with rollup.

## Get Started

**Step 1** - Run `npm install` and then start adding modules

**Step 2** Configure CSS. Here's a basic HTML example:

*index.html*

```html
 <link rel="stylesheet" href="https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css>
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`.

## TypeScript
This example can also be used with TypeScript sources. The following steps convert the example into a TypeScript starter.

1. Rename src/main.js to src/main.ts
2. Change npm packages
 1. `npm uninstall -D @rollup/plugin-commonjs`
 2. `npm install -D @rollup/plugin-typescript`
 3. `npm install -D tslib`
 4. `npm install -D typescript`
3. Edit rollup.config.js
 1. Change the line `import commonjs from "@rollup/plugin-commonjs";` to `import typescript from "@rollup/plugin-typescript";`
 2. Change `input: "src/main.js",` to `input: "src/main.ts",`
 3. Replace the `plugins` line `commonjs()` with `typescript()`
4. Edit rollup.config.prod.js and make the same changes
5. Add the file `tsconfig.json` to the folder containing `package.json`:
```json
{
  "compilerOptions": {
    "allowUnreachableCode": false,
    "declaration": false,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["dom", "es2020"],
    "module": "es2020",
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "es2020"
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
