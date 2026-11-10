# ArcGIS Maps SDK for JavaScript Astro template

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/js-maps-sdk-astro.zip)** 📁

This template demonstrates how to use the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) in a statically generated Astro application.

## Get started

To quickly scaffold a new application using this template, run the following command in your terminal:

```bash
npx @arcgis/create -n my-arcgis-app -t astro
```

This template uses the following packages:

- [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core)
- [`@arcgis/map-components`](https://www.npmjs.com/package/@arcgis/map-components)
- [`@arcgis/charts-components`](https://www.npmjs.com/package/@arcgis/charts-components)
- [`@esri/calcite-components`](https://www.npmjs.com/package/@esri/calcite-components)

## TypeScript

This template is configured to use TypeScript. The `tsconfig.json` file enables strict type checking and the modern
bundler module resolution needed for the SDK packages.

## OAuth

The `src/auth/configureOAuth.ts` helper demonstrates how to register an OAuth application with the SDK's
`IdentityManager`. Uncomment the example in `src/scripts/main.ts` and provide your app ID to load secure web maps.

## Resources

See the [Astro guide](https://developers.arcgis.com/javascript/latest/astro/) for full instructions.
