# Coding components Angular sample

## Known issues

When using Angular 17, for better application load performance with distribution builds it is recommended to use the Webpack builder @angular-devkit/build-angular:browser instead of the default esbuild configuration. This can be configured in the project's angular.json file. More information is available in the [Building Angular apps](https://angular.dev/tools/cli/build) topic on the angular.dev site. At this time esbuild does not offer the ability to customize chunking. That may result in the creation of a significant number of small on-disk bundled files, as well as an increase in the number of files requested by the application at startup. Here is an example snippet:

_angular.json - Webpack configuration_

```json
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
          },
        },
      }
```