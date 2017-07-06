/**
 * Based on the dojo-boilerplate
 * https://github.com/csnover/dojo-boilerplate
 * and https://github.com/tomwayson/esri-slurp-example
 *
 * Please refer to the Dojo Build tutorial for more details
 * http://dojotoolkit.org/documentation/tutorials/1.10/build/
 * Look to `util/build/buildControlDefault.js` for more information on available options and their default values.
 */

var profile = {
  optimizeOptions: {
    languageIn: "ECMASCRIPT5"
  },
  //dojoBootText: "require.boot && require.apply(null, require.boot);",
  insertAbsMids: 0,
  // `basePath` is relative to the directory containing this profile file; in this case, it is being set to the
  // src/ directory, which is the same place as the `baseUrl` directory in the loader configuration.
  basePath: "./src",

  // Builds a new release.
  action: "release",

  // Strips all comments and whitespace from CSS files and inlines @imports where possible.
  cssOptimize: "comments",

  // Excludes tests, demos, and original template files from being included in the built version.
  mini: true,

  internStrings: true,
  // Uses Closure Compiler or "uglify" as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe,
  // though ShrinkSafe is deprecated and not recommended.
  // This option defaults to "" (no compression) if not provided.
  optimize: "closure",

  // We"re building layers, so we need to set the minifier to use for those, too.
  // This defaults to "shrinksafe" if not provided.
  layerOptimize: "closure",

  // Build source map files to aid in debugging.
  // This defaults to true.
  useSourceMaps: false,

  // If present and truthy, instructs the loader to consume the cache of layer member modules
  noref: true,

  // Strips all calls to console functions within the code. You can also set this to "warn" to strip everything
  // but console.error, and any other truthy value to strip everything but console.warn and console.error.
  // This defaults to "normal" (strip all but warn and error) if not provided.
  stripConsole: "none", // if set to "all" will remove all console messages, include warnings and errors.

  // The default selector engine is not included by default in a dojo.js build in order to make mobile builds
  // smaller. We add it back here to avoid that extra HTTP request. There is also an "acme" selector available; if
  // you use that, you will need to set the `selectorEngine` property in index.html, too.
  selectorEngine: "acme",

  // A list of packages that will be built. The same packages defined in the loader should be defined here in the
  // build profile.
  packages: [
    // "app" is a sample path for your application
    // set this accordingly
    "app",
    "dijit",
    "dojo",
    "dojox",
    "dstore",
    "dgrid",
    "esri",
    {
      name: "moment",
      location: "moment",
      main: "moment",
      trees: [
          // don"t bother with .hidden, tests, min, src, and templates
          [".", ".", /(\/\.)|(~$)|(test|txt|src|min|templates)/]
      ],
      resourceTags: {
        amd: function(filename, mid){
          return /\.js$/.test(filename);
        }
      }
    }
  ],

  // Any module in an application can be converted into a "layer" module, which consists of the original module +
  // additional dependencies built into the same file. Using layers allows applications to reduce the number of HTTP
  // requests by combining all JavaScript into a single file.
  layers: {
    // This is the main loader module. It is a little special because it is treated like an AMD module even though
    // it is actually just plain JavaScript. There is some extra magic in the build system specifically for this
    // module ID.
    "dojo/dojo": {
      // By default, the build system will try to include `dojo/main` in the built `dojo/dojo` layer, which adds
      // a bunch of stuff we do not want or need. We want the initial script load to be as small and quick to
      // load as possible, so we configure it as a custom, bootable base.
      boot: true,
      customBase: true,
      include: [
        // include the app, set accordingly for your application
        "app/main",
        // dependencies of esri/map that will be requested if not included
        "dojox/gfx/path",
        "dojox/gfx/svg",
        "dojox/gfx/shape",

        /** enforce some modules loading */
        /** not included because dom is -1 */
        "dojo/io/script",
        "dojo/_base/browser",

        // esri stuff for 3D maps
        "esri/portal/support/layersCreator",
        "esri/views/3d/layers/VectorTileLayerView3D",
        "esri/views/3d/layers/ElevationLayerView3D",
        "esri/views/3d/webgl-engine/lib/FloatingBoxLocalOriginFactory",
        "esri/views/3d/webgl-engine/lib/Layer",
        "esri/views/3d/webgl-engine/lib/MaterialCollection",
        "esri/views/3d/webgl-engine/lib/Octree",
        "esri/views/3d/webgl-engine/lib/TextTextureAtlas"
      ],
      // You can define the locale for your application if you like
      includeLocales: ["en-us"]
    },
    "esri/views/2d/layers/VectorTileLayerView2D": {
      include: [
        "esri/views/2d/layers/VectorTileLayerView2D"
      ],
      exclude: [ "esri/views/MapView" ]
    },
    "esri/core/workers/WorkerConnection": {
      include: [
        "esri/core/workers/WorkerConnection"
      ]
    },
    "esri/views/vectorTiles/WorkerTileHandler": {
      include: [
        "esri/views/vectorTiles/WorkerTileHandler"
      ]
    }
  },
  // Providing hints to the build system allows code to be conditionally removed on a more granular level than simple
  // module dependencies can allow. This is especially useful for creating tiny mobile builds. Keep in mind that dead
  // code removal only happens in minifiers that support it! Currently, only Closure Compiler to the Dojo build system
  // with dead code removal. A documented list of has-flags in use within the toolkit can be found at
  // <http://dojotoolkit.org/reference-guide/dojo/has.html>.
  staticHasFeatures: {
    // The trace & log APIs are used for debugging the loader, so we do not need them in the build.
    "dojo-trace-api": 0,
    "dojo-log-api": 0,

    // This causes normally private loader data to be exposed for debugging. In a release build, we do not need
    // that either.
    "dojo-publish-privates": 0,

    // This application is pure AMD, so get rid of the legacy loader.
    "dojo-sync-loader": 0,

    // `dojo-xhr-factory` relies on `dojo-sync-loader`, which we have removed.
    "dojo-xhr-factory": 0,

    // We are not loading tests in production, so we can get rid of some test sniffing code.
    "dojo-test-sniff": 0,
    "extend-esri": 0,

    "config-deferredInstrumentation": 0,
    "config-dojo-loader-catches": 0,
    "config-tlmSiblingOfDojo": 0,
    "dojo-amd-factory-scan": 0,
    "dojo-combo-api": 0,
    "dojo-config-api": 1,
    "dojo-config-require": 0,
    "dojo-debug-messages": 0,
    "dojo-dom-ready-api": 1,
    "dojo-firebug": 0,
    "dojo-guarantee-console": 1,
    "dojo-has-api": 1,
    "dojo-inject-api": 1,
    "dojo-loader": 1,
    "dojo-modulePaths": 0,
    "dojo-moduleUrl": 0,
    "dojo-requirejs-api": 0,
    "dojo-sniff": 0,
    "dojo-timeout-api": 0,
    "dojo-undef-api": 0,
    "dojo-v1x-i18n-Api": 1,
    "dom": -1,
    "host-browser": -1,
    "extend-dojo": 1
  },
  defaultConfig: {
    baseUrl: "dojo",
    async: 1,
    hasCache: {
      // these are the values given above, not-built client code may test for these so they need to be available
      "dojo-built": 1,
      "dojo-loader": 1,
      "dojo-undef-api": 0,
      "dom": 1,
      "host-browser": 1,

      // Disable deferred instrumentation by default in the built version.
      "config-deferredInstrumentation": 0,

      // Dojo loader has built-in "has" api. Since dojoConfig is used
      // by Dojo loader, we can set the default here.
      "dojo-has-api": 1,

      // default
      "config-selectorEngine": "acme"
    },
    packages: [
      {
        name: "app",
        location: "../app"
      },
      {
        name: "dijit",
        location: "../dijit"
      },
      {
        name: "dojox",
        location: "../dojox"
      },
      {
        name: "dstore",
        location: "../dstore"
      },
      {
        name: "dgrid",
        location: "../dgrid"
      },
      {
        name: "esri",
        location: "../esri"
      },
      {
        name: "moment",
        location: "../moment",
        main: "moment"
      }
    ],
  }
};
