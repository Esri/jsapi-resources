# Bower Sample application
======

This is a sample application showing how to use [Bower](http://bower.io/) to build your [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) application.
It provides a Gruntfile for build scenario using RequireJS.

# Requirements
* [node & npm](https://nodejs.org/)
* [bower](http://bower.io/)
* [git](https://git-scm.com/)

# Usage
* `npm install` - installs required node and bower packages
* `npm run clean` - removes built files from `dist` directory
* `npm run build` - run the RequireJS optimizer on application

If you have [Python](https://www.python.org/) you can run `python -m SimpleHTTPServer` to test the application.

# Notes
For details on the RequireJS Optimizer, you can [review the documentation](http://requirejs.org/docs/optimization.html).

# Yarn

You can alternatively use [Yarn](https://yarnpkg.com) instead of Bower for package management.

Update your `package.json` to the following.

```json
  "dependencies": {
    "esri": "https://github.com/Esri/arcgis-js-api.git#3.30.0",
    "dojo": "Esri/dojo#v1.14.2/esri-3.28.0",
    "dojox": "Esri/dojox#v1.14.2/esri-3.28.0",
    "dijit": "Esri/dijit#v1.14.2/esri-3.28.0",
    "util": "Esri/dojo-util#v1.14.2/esri-3.28.0",
    "dgrid": "Esri/dgrid#0.3.17/esri-3.20.0",
    "dgrid1": "Esri/dgrid#v1.2.1/esri-3.22.0",
    "dstore": "SitePen/dstore#v1.1.2",
    "put-selector": "0.3.6",
    "xstyle": "https://github.com/kriszyp/xstyle.git#v0.3.3",
    "moment": "2.24.0",
    "dijit-themes": "https://github.com/dojo/dijit-themes.git#1.14.0",
    "requirejs": "~2.3.2"
  }
```

And you can run the command `yarn` to install the required packages.
