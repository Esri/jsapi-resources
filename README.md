Resources for the ArcGIS Maps SDK for JavaScript
===============
A collection of resources for developers using the [ArcGIS Maps SDK for JavaScript](https://js.arcgis.com). Refer to the README files in each subdirectory for specific instructions on how to use a particular resource. 

## Samples

This repository provides a collection of code samples that provide _proof-of-concept_ for using the ArcGIS Maps SDK for JavaScript components and core API with a variety of popular build tools, frameworks and module bundlers. 

* [Components samples](./component-samples/)
* [Core API samples](./core-samples/)

## HTML OAuth callback page

If you have set OAuthInfo's [`popup`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-OAuthInfo.html#popup) property to `true`, you'll need to host a [callback page](./oauth/) on your server. For more information, visit the Maps SDK's [Access secure resources](https://developers.arcgis.com/javascript/latest/secure-resources/) guide topic.

## AMD TypeScript declaration files (Deprecated)

The AMD TypeScript `.d.ts` files are deprecated at 4.29 and the final update will be 4.31. The last several files can be downloaded from this [repo](./typescript/README.md). The NPM `.d.ts` files can be installed via the [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api) package, which was also deprecated at 4.29. Use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) package instead.

## Contributing

Please see our [guidelines for contributing](CONTRIBUTING.md).

## Licensing
Copyright 2024 Esri

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
