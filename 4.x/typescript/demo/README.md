# Demo App (AMD)

A simple application that demonstrates using TypeScript with the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) AMD modules. The TypeScript file `main.ts` is converted to JavaScript, and the `import` statements are converted to AMD by the TypeScript compiler. When you run the application, it uses the SDK's AMD modules from the [ArcGIS CDN](https://developers.arcgis.com/javascript/latest/install-and-set-up/#amd-modules-via-arcgis-cdn).

## Usage

1. Clone the repo and `npm install` dependencies
2. `npm run dev` to compile `/app/main.ts` to `main.js` in the same folder and watch for changes
3. Launch `index.html` in your browser of choice.
