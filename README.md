jsapi-resources
===============
A collection of resources for developers using the [ArcGIS Maps SDK for JavaScript](https://js.arcgis.com). Refer to the README files in each subdirectory for specific instructions on how to use a particular resource. 

## ES modules (ESM) samples

The Maps SDK's ES modules are available through the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) package on NPM. TypeScript definitions are included in the install.

Below are a collection of samples that provide _proof-of-concept_ for using `@arcgis/core` with a variety of popular JavaScript build tools, frameworks and module bundlers.  

* [Angular CLI](./esm-samples/jsapi-angular-cli/)
* [ArcGIS ESM CDN](./esm-samples/jsapi-esm-cdn/)
* [Custom workers](./esm-samples/jsapi-custom-workers/)
* [Custom UI](./esm-samples/jsapi-custom-ui/)
* [Deno](./esm-samples/jsapi-deno/)
* [Node.js](./esm-samples/jsapi-node/)
* [React/Vite](./esm-samples/jsapi-react/)
* [Rollup.js (no framework)](./esm-samples/rollup/)
* [Vue.js/Vite](./esm-samples/jsapi-vue/)
* [Vite/TypeScript](./esm-samples/jsapi-vite-ts/)
* [Webpack (no framework)](./esm-samples/webpack/)

## AMD TypeScript declaration files

The TypeScript `.d.ts` files for the last several releases of the Maps SDK's AMD modules can be downloaded from this [repo](./4.x/typescript/README.md). Or, you can NPM install the [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api) package and the TypeScript definitions are included.

## HTML OAuth callback example

If you have set OAuthInfo's `popup` property to `true`, you'll need to host a callback page on your server. This repo contains an [example callback page](./oauth/). For more information, visit the Maps SDK's [Access secure resources(https://developers.arcgis.com/javascript/latest/secure-resources/)] guide topic.

## 3.x (Legacy) samples

Legacy 3.x Bower and TypeScript samples can be downloaded or [checked out](https://git-scm.com/book/en/v2/Git-Basics-Tagging) via the [`legacy` releases tag](https://github.com/Esri/jsapi-resources/releases/tag/legacy). 

## Additional resources

* [ArcGIS Maps SDK for JavaScript](https://js.arcgis.com)
* [TypeScript](http://www.typescriptlang.org/)

## Contributing

Please see our [guidelines for contributing](CONTRIBUTING.md).

## Licensing
Copyright 2023 Esri

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
