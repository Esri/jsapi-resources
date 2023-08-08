# TypeScript (AMD)

Download the TypeScript declaration file from the [archive](./archive/) folder. Choose the file that corresponds to the ArCGIS Maps SDK for JavaScript [version](https://developers.arcgis.com/javascript/latest/install-and-set-up/#amd-modules-via-arcgis-cdn) being used in your app. 

> **_NOTE:_**  The [declaration files](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#dts-files) only provide type information, they do not provide any SDK mapping capabilities. 

You can also get the TypeScript definitions by locally installing the SDK package from NPM. From your project's root directory, run `npm install arcgis-js-api` on the command line. This package contains the full SDK functionality along with the type definitions. Refer to the SDK's [Introduction to tooling](https://developers.arcgis.com/javascript/latest/tooling-intro/) guide topic for additional information.

## Known issues

* Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the SDK without any TypeScript build errors.

## Requirements

* [TypeScript][2] 3.7+

## Resources

* [TypeScript Editor Support][3]
* Type definitions for many other libraries are available [here][4].

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

[1]: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/arcgis-js-api
[2]: http://www.typescriptlang.org/
[3]: https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support
[4]: https://github.com/DefinitelyTyped/DefinitelyTyped
