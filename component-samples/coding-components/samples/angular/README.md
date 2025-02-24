# Coding components Angular sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/coding-components-sample-angular.zip)** 📁

## Known issues

- The [@arcgis/coding-components-angular](https://www.npmjs.com/package/@arcgis/coding-components-angular) npm package has been deprecated at 4.31. We recommend using the `@arcgis/coding-components`, as shown in the sample.
- The compile warning `The glob pattern import("./**/*.entry.js*") did not match any files [empty-glob]` is a known issue with Stencil and it can be ignored.
- You may encounter the following build configuration error:
  `[ERROR] No loader is configured for ".ttf" files: node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf`.

To fix this, the following has been added to the `angular.json` configuration file in this sample:

```json
"loader": {
  ".ttf": "file"
}
```

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
