# ArcGIS Maps SDK for JavaScript with webpack

This sample demonstrates how to use the [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) ES modules with webpack.

- *NOTE:* Compatibility with Webpack versions prior to `5.84.0` was deprecated at 4.27.

## Known Issues
- [July 2022] If you are using Webpack `4` and experiencing `Module parse failed: Unexpected token. You may need an appropriate loader to handle this file type...` errors during your build process after upgrading to ArcGIS Maps SDK for JavaScript `4.24`+, then try the following steps. 

  API version `4.24` is the first version to use ES2020 [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and [nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) operators. These steps can help resolve parsing errors with older versions of Webpack.

  It is recommended to use [`babel-loader@8`](https://github.com/babel/babel-loader#install) because `v9` does not work with Webpack `4`.

   - Install or upgrade these depedencies:

     _Command-line_
    
   ```
     npm install -D @babel/core @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining babel-loader@8
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

- `webpack-dev-server` had a [breaking change](https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md#-breaking-changes-4) in `4.0.0` which removed `contentBase` in favor of the `static` option. This sample was updated accordingly.

## Get Started

Run `npm install` and then start adding modules.

For a list of all available `npm` commands see `scripts` in `package.json`.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.
