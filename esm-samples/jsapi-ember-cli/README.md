# ArcGIS API for JavaScript with Ember CLI

This repo integrates [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) using [embroider](https://github.com/embroider-build/embroider).

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS. Here's an Ember example:

*app.css*

```css
@import 'https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Misc.

To prevent runtime errors in production builds make sure target browsers do not include IE 11.

*./config/targets.js*

```js
'use strict';

const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions'
];

const isCI = Boolean(process.env.CI);
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  // browsers.push('ie 11'); results in runtime error
}

module.exports = {
  browsers
};
```

---

# ember-cli-app

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-cli-app`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
