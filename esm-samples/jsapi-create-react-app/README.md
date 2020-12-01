# ArcGIS API for JavaScript with create-react-app

Integrating React with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) does not require much manual configuration. The one requirement is having to copy the `@arcgis/core/assets` folder to the build. CRA does not provide a clear method to do this during the build so, you can use [`ncp`](https://www.npmjs.com/package/ncp) to copy the files to the build directory on `postinstall`.

```json
// package.json
{
  "scripts": {
    "copy": "ncp ./node_modules/@arcgis/core/assets ./public/assets",
    "postinstall": "npm run copy",
    ...
  },
}
```

There were recent versions of `create-react-app` that would attempt to inject babel helpers into ArcGIS API for JavaScript code during the build, but would not copy the helper files. We were able to prevent this by letting the build only build for modern browsers.

```json
// package.json
{
  "browserslist": {
    "production": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
}
```

If you run in to issues with this method, you can use [react-app-rewired](https://www.npmjs.com/package/react-app-rewired).

```js
// config-overrides.js
module.exports = function override(config, env) {
  // Tell create-react-app not to run node_modules through babel.
  // May vary based on version of create-react-app being used.
  config.module.rules[2].oneOf[2].exclude = /(@babel(?:\/|\\{1,2})runtime|node_modules)/;
  return config;
} 
```

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
