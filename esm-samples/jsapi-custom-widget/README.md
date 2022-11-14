# Recenter custom widget with Vite

This repo demonstrates creating a custom widget using [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Vite. It also includes a basic example of using message bundles to display custom localized strings. 

| :warning:  Deprecation Notice   |
|-----------------------------------------|
| This sample is deprecated and it will be removed in a future release. Refer to the [SDK's FAQ](https://developers.arcgis.com/javascript/latest/faq/#how-are-breaking-changes-managed) for more information on breaking changes. When building custom widgets, it is recommended to use the UI component library of your choice. |

## Known issues
* When using Vite 3, [`"useDefineForClassFields": false`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) needs to be set in `tsconfig.json`. The ArcGIS JS API requires this setting for the widget's property binding to work.

## Get Started

**Step 1** - Run `npm install`

**Step 2** Configure CSS. 

*style.css*

```css
@import 'https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Before you begin

If this is your first time working with a custom widget, please refer to the [Custom widget basics](https://developers.arcgis.com/javascript/latest/custom-widget/) guide topic. 

Custom API widgets are written in TypeScript, which is then compiled to JavaScript. TypeScript is included in this project, however for more discussion on setting up TypeScript within your environment, please refer to the [TypeScript Setup](https://developers.arcgis.com/javascript/latest/typescript-setup/) guide topic.

Custom widgets are built using `.tsx`, which allows using [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) to define the user interface.

## Working with message bundles

A message bundle is an object containing strings that you wish to be rendered within the widget. In this sample the strings are being used for localized translations. These bundles are identified by a unique string, such as `bundleId`. For this sample there are two separate JSON files that contain the bundles, one contains a string for English and the other contains a string for French. 

The sample uses a [`MessageBundleLoader`](https://developers.arcgis.com/javascript/latest/api-reference/esri-intl.html#MessageBundleLoader) object, and it fetches the translation strings in the user's locale:

```js

const loader = {
  pattern: "esm-widget-vite/assets/",
  async fetchMessageBundle(bundleId, locale) {
    const [, filename] = bundleId.split("/t9n/");
    const knownLocale = intl.normalizeMessageBundleLocale(locale);
    const bundlePath = `./assets/t9n/${filename}_${knownLocale}.json`;

    // bundlePath is "https://domain-URL/esm-widget-vite/assets/t9n/widget_<locale>.json"

    const response = await fetch(bundlePath);
    return response.json();
  }
}
```

Once the loader is created, then the sample uses [`registerMessageBundler`](https://developers.arcgis.com/javascript/latest/api-reference/esri-intl.html#registerMessageBundleLoader) to register the `MessageBundleLoader` with the application:

```js

intl.registerMessageBundleLoader(loader);
```

For more information on working with locales and registering message bundles refer to the [esri/intl API documentation](https://developers.arcgis.com/javascript/latest/api-reference/esri-intl.html).

## Folder structure

The custom widget in this repo uses the following folder structure. This is important as it relates to setting various paths that refer to the `/public` folder. Vite treats `public` as a special directory. If you are implementating message bundles and using a framework other than Vite, the `public` folder in this repo may be handled differently by other frameworks. The [Vite guide](https://vitejs.dev/guide/assets.html#the-public-directory) has more information on this topic.

```sh
root-folder/
  src/
    widget.tsx 
    main.ts
  public/assets/
    t9n/
      widget_en.json    // English message bundle
      widget_fr.json    // French message bundle
  index.html
```

## Commands

For a list of all available npm script commands, see the scripts in `package.json` or use `npm run`.