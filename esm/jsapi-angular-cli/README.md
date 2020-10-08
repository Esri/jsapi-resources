# ArcGIS API for JavaScript with Angular CLI

To integrate the ArcGIS API for JavaScript, you can update the `angular.json` like below.

```json
// angular.json
{
"projects": {
    "ng-cli": {
      ...
      "architect": {
        "build": {
          "options": {
            ...          
            "assets": [
              {
                "glob": "**/*",
                "input": "node_modules/@arcgis/core/assets",
                "output": "/assets/"
              },
              "src/favicon.ico",
              "src/assets"
            ],
            ...
          },
}
```

---

# angular-cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.9.

## ArcGIS JS API notes

1. Run `npm install`. 
2. There are two small changes included in this repo that enable the JS API to work. In `angular.json` there is a change to copy the JS API assets folder to `/assets`. And, under build > options > allowedCommonJsDependencies we've included `moment`. 

```
  "allowedCommonJsDependencies": [
    "moment"
  ],
  "assets": [
    {
      "glob": "**/*",
      "input": "node_modules/@arcgis/core/assets",
      "output": "/assets/"
    },
    "src/favicon.ico",
    "src/assets"
  ],

```

4. When building routes into your app, you'll need to set the base url for the /assets folder, for example:

```javascript
import config from "@arcgis/core/config.js";

  . . .

  ngOnInit(): any {
    (config as any).baseUrl = "/"; //assuming assets are in /assets
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
