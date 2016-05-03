# arcgis-js-api build tools
======

These are the recommended build tools for using the [arcgis-js-api](https://github.com/Esri/arcgis-js-api) Bower installation.
You can read more about Bower [here](http://bower.io/).

## Why
You would use the Bower download of the ArcGIS API for JavaScript if you wanted to create local builds of your application.
This is similar to what you can do with the [JavaScript Optimizer](https://jso.arcgis.com/) but locally.
This can also provide an improved debugging experience as you will know which module an error originates from.

## Dojo
If you want to build your application using Dojo, we recommend [grunt-dojo](https://github.com/phated/grunt-dojo) and the included [build.profile](dojo/build.profile.js).
The `bower` release of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) is simply a minified version of the API.

The demo Dojo application can be found [here](dojo);

## RequireJS
You also have the option to use [RequireJS](http://requirejs.org/) as the AMD loader with the API instead of the Dojo loader.
There are some limitations in this regard.
The RequireJS loader is missing some methods that might be required at runtime, one of which is a cross-domain loader.
You can view the provided [Gruntfile](requirejs/Gruntfile.js) for information on some build limitations.
These mainly have to do with limitations in how the [r.js optimizer](https://github.com/jrburke/r.js) performs builds.

The demo RequireJS application can be found [here](requirejs);

## Note
If you run into issues during the Bower installation process due to firewall settings, you may need to use the following command:

`git config --global url."https://github.com".insteadOf git://github.com`
