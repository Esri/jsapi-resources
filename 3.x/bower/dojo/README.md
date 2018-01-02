# Bower Sample application

This is a sample application showing how to use [Bower](http://bower.io/) to build your [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/3/) application.
It provides a Gruntfile for build scenario using Dojo.

# Requirements
* [node & npm](https://nodejs.org/)
* [bower](http://bower.io/)
* [java 7 or greater](https://java.com/en/download/) - for [Closure Compiler](https://github.com/google/closure-compiler) used during build

# Usage
* `npm install -g bower` - installs bower
* `npm install` - installs required node and bower packages
* `npm run clean` - removes built files from `dist` directory
* `npm run build` - run the Dojo build on application

If you have [Python](https://www.python.org/) you can run `python -m SimpleHTTPServer` in same folder as application to run it in a browser.

# Notes
For details on the Dojo build system, [review the Dojo documentation](http://dojotoolkit.org/documentation/tutorials/1.10/build/index.html).
