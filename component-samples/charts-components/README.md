# Charts components (beta)

> **Disclaimer:** Charts components are in beta. Please do not contact Esri Technical Support for assistance. Questions can be posted on the [Esri Community](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/bd-p/arcgis-api-for-javascript-questions).

These samples and tutorials are for [@arcgis/charts-components](https://www.npmjs.com/package/@arcgis/charts-components) and [@arcgis/charts-model](https://www.npmjs.com/package/@arcgis/charts-model).

## Download

You can use these links to download individual samples:

- [Angular](https://esri.github.io/jsapi-resources/zips/charts-components-sample-angular.zip)
- [CDN](https://esri.github.io/jsapi-resources/zips/charts-components-sample-cdn.zip)
- [React](https://esri.github.io/jsapi-resources/zips/charts-components-sample-react.zip)
- [Vite (no framework)](https://esri.github.io/jsapi-resources/zips/charts-components-sample-vite.zip)
- [Vue](https://esri.github.io/jsapi-resources/zips/charts-components-sample-vue.zip)
- [Webpack (no framework)](https://esri.github.io/jsapi-resources/zips/charts-components-sample-webpack.zip)

## Loading All Components

Charts components currently only support loading all components. You can register all components at once using the following approach:

```js
import { defineCustomElements } from "@arcgis/charts-components/dist/loader";

defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });
```

## Known issue

- The console error `Error: <rect> attribute height: A negative value is not valid.` is a known issue and it can be ignored. This should not impact the actual chart rendering.

## Licensing

Copyright 2025 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/Esri/jsapi-resources/blob/master/license.txt) file.
