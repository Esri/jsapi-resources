# npm Sample application

This is a sample application showing how to use [npm](https://www.npmjs.com/) to build your [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) application.
It provides multiple types of ways to run your local builds using Dojo.

It provides a [Gruntfile](Gruntfile.js), [gulpfile](gulpfile.js), and a [makefile](makefile).

# Requirements
* [node & npm](https://nodejs.org/)
* [java 7 or greater](https://java.com/en/download/) - for [Closure Compiler](https://github.com/google/closure-compiler) used during build

# Usage
* `npm install` - installs required packages
* `npm run clean` - removes built files from `dist` directory
* `npm run build` - run the Dojo build on application

If you are interested in building the [Sass](http://sass-lang.com/) files included in the npm release of the API, please refer to this [document](SASS.md).

## Additional tools
We have also included a `gulpfile` if that is your build tool of choice. Just run `gulp` to start the build.

And just to demonstrate that it can be done, we've included a `makefile` so you can build the demo application using the `make` command.

If you have [Python](https://www.python.org/) you can run `python -m SimpleHTTPServer` in same folder as application to run it in a browser.

# Notes
For details on the Dojo build system, [review the Dojo documentation](http://dojotoolkit.org/documentation/tutorials/1.10/build/index.html).
