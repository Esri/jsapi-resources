# Map components Angular sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/map-component-sample-angular.zip)** 📁

## Known issues
* If you encounter the error message `TS1203: Export assignment cannot be used when targeting ECMAScript modules`, one temporary workaround is to set `skipLibCheck` to `true`. This setting will reduce type-system accuracy. More information is available here: https://www.typescriptlang.org/tsconfig/#skipLibCheck. 
* The [@arcgis/map-components-angular](https://www.npmjs.com/package/@arcgis/map-components-angular) npm package has been deprecated at 4.31.  We recommend using the `@arcgis/map-components`, as shown in the sample.
* The compile warning `The glob pattern import("./**/*.entry.js*") did not match any files [empty-glob]` is a known issue with Stencil and it can be ignored. 
