# ArcGIS API for JavaScript with webpack

This repo demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with webpack.

## Known Issues
- [July 2022] If you are using Webpack `4` and experiencing `Module parse failed: Unexpected token. You may need an appropriate loader to handle this file type...` errors during your build process after upgrading to ArcGIS API for JavaScript `4.24`+, then try the following steps. 

  API version `4.24` is the first version to use ES2020 [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and [nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) operators. These steps can help resolve parsing errors with older versions of Webpack:

   - Install or upgrade these depedencies:

     _Command-line_

   ```
     npm install -D @babel/core @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining babel-loader
   ```
   
     _package.json_

   ```json
    "@babel/core": "^7.18.9",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.18.6",
    "@babel/plugin-proposal-optional-chaining": "^7.18.9",
    "babel-loader": "^8.2.5",   
   ```

   - Add the following to your Webpack config:

     _webpack.config.js_

   ```
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: {
              and: [/node_modules/], // exclude libraries in node_modules ...
              not: [
                // except for ones that needs to be transpiled because they use modern syntax
                /@arcgis[\\/]core/
              ]
            },
            use: {
              loader: "babel-loader",
              options: {
                plugins: [
                  // these are required by Webpack 4 since @arcgis/core@4.24
                  ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: true }],
                  ["@babel/plugin-proposal-optional-chaining", { loose: true }]
                ]
              }
            }
          }
        ]
      }
    };
   ```

- `webpack-dev-server` had a [breaking change](https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md#-breaking-changes-4) in `4.0.0` which removed `contentBase` in favor of the `static` option. This sample has been changed accordingly.

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS. Here's a basic CSS example:

*index.css*

```css
@import 'https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`.
