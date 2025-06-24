# Coding components Angular sample

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/coding-components-sample-angular.zip)** 📁

See the [Get started with npm guide](https://developers.arcgis.com/javascript/latest/get-started/#npm) for full instructions.

## Known issues

- You may encounter the following build configuration error:
  `[ERROR] No loader is configured for ".ttf" files: node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf`.

  To fix this, the following has been added to the `angular.json` configuration file in this sample:

  ```json
  "loader": {
    ".ttf": "file"
  }
  ```

- You may encounter the following warning when running the sample:
  `The above dynamic import cannot be analyzed by Vite`.
  This does not affect the functionality of the sample. The problem may be related to Angular's Vite configuration and how it handles dynamic imports such as those in the [monaco-editor](https://microsoft.github.io/monaco-editor/) which the Arcade Editor component is built with.
  - https://github.com/angular/angular-cli/issues/29470
  - https://github.com/angular/angular/issues/59764
