# Bower Sample application
======

This is a sample application showing how to use [Bower](http://bower.io/) to build your [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) application.
It provides a Gruntfile for build scenario using RequireJS.

# Requirements
* [node & npm](https://nodejs.org/)
* [bower](http://bower.io/)

# Usage
* `npm install -g bower` - installs bower
* `npm install` - installs required node and bower packages
* `npm run clean` - removes built files from `dist` directory
* `npm run build` - run the RequireJS optimizer on application

If you have [Python](https://www.python.org/) you can run `python -m SimpleHTTPServer` to test the application.

# Notes
For details on the RequireJS Optimizer, you can [review the documentation](http://requirejs.org/docs/optimization.html).
