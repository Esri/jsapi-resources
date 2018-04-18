/**
 * Based on the dojo-boilerplate
 * https://github.com/csnover/dojo-boilerplate
 * and https://github.com/tomwayson/esri-slurp-example
 *
 * Please refer to the Dojo Build tutorial for more details
 * http://dojotoolkit.org/documentation/tutorials/1.10/build/
 * Look to `util/build/buildControlDefault.js` for more information on available options and their default values.
 */

const DIR = "./../node_modules/";

var profile = {
  optimizeOptions: {
    languageIn: "ECMASCRIPT5"
  },

  // `basePath` is relative to the directory containing this profile file; in this case, it is being set to the
  // src/ directory, which is the same place as the `baseUrl` directory in the loader configuration.
  basePath: "./src",

  action: "release",
  optimize: "closure", // requires Java 6 or later: http://code.google.com/p/closure-compiler/wiki/FAQ
  layerOptimize: "closure",
  useSourceMaps: false,
  cssOptimize: "comments",
  copyTests: false,
  internStrings: true,
  mini: true,

  // The default selector engine is not included by default in a dojo.js build in order to make mobile builds
  // smaller. We add it back here to avoid that extra HTTP request. There is also an "acme" selector available; if
  // you use that, you will need to set the `selectorEngine` property in index.html, too.
  selectorEngine: "lite",
  // Strips all calls to console functions within the code. You can also set this to "warn" to strip everything
  // but console.error, and any other truthy value to strip everything but console.warn and console.error.
  // This defaults to "normal" (strip all but warn and error) if not provided.
  stripConsole: "none",

  // dojoBootText: "require.boot && require.apply(null, require.boot);",
  insertAbsMids: 0,
  // If present and truthy, instructs the loader to consume the cache of layer member modules
  noref: true,

  // A list of packages that will be built. The same packages defined in the loader should be defined here in the
  // build profile.
  packages: [
    // "app" is a sample path for your application
    // set this accordingly
    "app",
    {
      name: "dijit",
      location: DIR + "/dijit"
    },
    {
      name: "dojo",
      location: DIR + "/dojo"
    },
    {
      name: "dojox",
      location: DIR + "/dojox"
    },
    {
      name: "dstore",
      location: DIR + "/dojo-dstore"
    },
    {
      name: "dgrid",
      location: DIR + "dgrid"
    },
    {
      name: "esri",
      location: DIR + "/arcgis-js-api"
    },
    {
      name: "moment",
      location: DIR + "/moment",
      main: "moment",
      trees: [
        // don"t bother with .hidden, tests, min, src, and templates
        [".", ".", /(\/\.)|(~$)|(test|txt|src|min|templates)/]
      ],
      resourceTags: {
        amd: function(filename, mid) {
          return /\.js$/.test(filename);
        }
      }
    },
    {
      name:     "@dojo",
      location: "./../node_modules/@dojo",
      resourceTags: {
        miniExclude: function(filename, mid) {
          if (filename.slice(-4) === ".mjs") {
            return true;
          }
          return [
            "@dojo/core/request/providers/node",
            "@dojo/shim/browser", // requires pepjs and intersection-observer
            "@dojo/shim/util/amd"
          ].indexOf(mid) > -1;
        }
      }
    },
    {
      name:     "cldrjs",
      location: "./../node_modules/cldrjs",
      main:     "dist/cldr",
      resourceTags: {
        miniExclude: function(filename, mid) {
          return mid.indexOf("/node_main") > -1 ||
              mid.indexOf("/doc/") > -1;
        }
      }
    },
    {
      name:     "globalize",
      location: "./../node_modules/globalize",
      main:     "dist/globalize",
      resourceTags: {
        miniExclude: function(filename, mid) {
          return mid.indexOf("/CONTRIBUTING") > -1 ||
              mid.indexOf("/node-main") > -1 ||
              mid.indexOf("/doc/") > -1 ||
              mid.indexOf("/examples/") > -1;
        }
      }
    },
    {
      name:     "maquette",
      location: "./../node_modules/maquette",
      main:     "dist/maquette.umd",
      resourceTags: {
        miniExclude: function(filename, mid) {
          return mid.indexOf("/polyfills/") > -1 ||
                 mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1;
        }
      }
    },
    {
      name:     "maquette-jsx",
      location: "./../node_modules/maquette-jsx",
      main:     "dist/maquette-jsx.umd",
      resourceTags: {
        miniExclude: function(filename, mid) {
          return mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1;
        }
      }
    },
    {
      name:     "maquette-css-transitions",
      location: "./../node_modules/maquette-css-transitions",
      main:     "dist/maquette-css-transitions.umd",
      resourceTags: {
        miniExclude: function(filename, mid) {
          return mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1;
        }
      }
    },
    {
      name:     "tslib",
      location: "./../node_modules/tslib",
      main:     "tslib",
      resourceTags: {
        miniExclude: function(filename, mid) {
          return mid.indexOf("/tslib.es6") > -1 ||
              mid.indexOf("/tslib.html") > -1 ||
              mid.indexOf("/docs/") > -1;
        }
      }
    }
  ],

  // this is also set on defaultConfig at the bottom of this file
  map: {
    globalize: {
      "cldr": "cldrjs/dist/cldr",
      "cldr/event": "cldrjs/dist/cldr/event",
      "cldr/supplemental": "cldrjs/dist/cldr/supplemental",
      "cldr/unresolved": "cldrjs/dist/cldr/unresolved"
    }
  },

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
        "dojo/domReady",
        // include the app, set accordingly for your application
        "app/main",

        /** enforce some modules loading */
        /** not included because dom is -1 */
        "dojo/_base/browser",
        "esri/core/request/script",

        // esri stuff for 3D maps
        "esri/portal/support/layersCreator",
        "esri/views/3d/layers/VectorTileLayerView3D"
      ]
      // You can define the locale for your application if you like
      // includeLocales: ["en-us"]
    },
    "esri/core/workers": {
      include: [
        "esri/core/workers"
      ]
    },
    "esri/identity/IdentityManager": {
      include: [
        "esri/identity/IdentityManager"
      ]
    },
    "esri/views/MapView": {
      include: [
        "esri/views/MapView",
        "esri/views/2d/layers/GraphicsLayerView2D",
        "esri/views/2d/layers/FeatureLayerView2D",
        "esri/views/2d/layers/TiledLayerView2D"
      ],
      exclude: [
        "esri/widgets/support/widget"
      ]
    },
    "esri/views/SceneView": {
      include: [
        "esri/views/SceneView",
        "esri/layers/graphics/controllers/I3SOnDemandController",
        "esri/layers/SceneLayer",
        "esri/views/3d/layers/ElevationLayerView3D",
        "esri/views/3d/layers/FeatureLayerView3D",
        "esri/views/3d/layers/SceneLayerView3D",
        "esri/views/3d/layers/TiledLayerView3D"
      ],
      exclude: [
        "esri/widgets/support/widget"
      ]
    },
    "esri/WebMap": {
      include: [
        "esri/WebMap"
      ]
    },
    "esri/WebScene": {
      include: [
        "esri/WebScene"
      ]
    },
    "esri/layers/VectorTileLayer": {
      include: [
        "esri/layers/VectorTileLayer"
      ]
    },
    "esri/views/2d/layers/VectorTileLayerView2D": {
      include: [
        "esri/views/2d/layers/VectorTileLayerView2D"
      ],
      exclude: [ "esri/views/MapView" ]
    },
    "esri/views/2d/layers/FeatureLayerView2DWebGL": {
      include: [
        "esri/views/2d/layers/FeatureLayerView2DWebGL"
      ],
      exclude: [ "esri/views/MapView" ]
    },
    "esri/views/2d/layers/support/FeatureLayerWorker": {
      include: [
        "esri/views/2d/layers/support/FeatureLayerWorker"
      ]
    },
    "esri/widgets/Widget": {
      include: [
        "esri/widgets/support/widget"
      ]
    },
    "esri/core/workers/RemoteClient": {
      include: [
        "esri/core/workers/RemoteClient",
        // add files here that most workers will need
        "esri/core/workers/request"
      ]
    },
    "esri/layers/graphics/sources/support/CSVSourceWorker": {
      include: [
        "esri/layers/graphics/sources/support/CSVSourceWorker"
      ],
      exclude: [
        "esri/core/workers/RemoteClient"
      ]
    },
    "esri/views/2d/layers/features/Pipeline": {
      include: [
        "esri/views/2d/layers/features/Pipeline",
        "esri/views/2d/layers/features/controllers/OnDemandController",
        "esri/views/2d/layers/features/controllers/MemoryController",
        "esri/views/2d/layers/features/processors/SymbolProcessor"
      ],
      exclude: [
        "esri/core/workers/RemoteClient"
      ]
    },
    "esri/views/3d/layers/PointCloudWorker": {
      include: [
        "esri/views/3d/layers/PointCloudWorker"
      ],
      exclude: [
        "esri/core/workers/RemoteClient"
      ]
    },
    "esri/views/3d/layers/SceneLayerWorker": {
      include: [
        "esri/views/3d/layers/SceneLayerWorker"
      ],
      exclude: [
        "esri/core/workers/RemoteClient"
      ]
    },
    "esri/views/vectorTiles/WorkerTileHandler": {
      include: [
        "esri/views/vectorTiles/WorkerTileHandler"
      ],
      exclude: [
        "esri/core/workers/RemoteClient"
      ]
    }
  },
  // Providing hints to the build system allows code to be conditionally removed on a more granular level than simple
  // module dependencies can allow. This is especially useful for creating tiny mobile builds. Keep in mind that dead
  // code removal only happens in minifiers that support it! Currently, only Closure Compiler to the Dojo build system
  // with dead code removal. A documented list of has-flags in use within the toolkit can be found at
  // <http://dojotoolkit.org/reference-guide/dojo/has.html>.
  // these are all the has feature that affect the loader and/or the bootstrap
  // the settings below are optimized for the smallest AMD loader that is configurable
  // and include dom-ready support
  staticHasFeatures: {
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

    // https://dojotoolkit.org/documentation/tutorials/1.10/device_optimized_builds/index.html
    // https://dojotoolkit.org/reference-guide/1.10/dojo/has.html
    "dom-addeventlistener": 1,
    "dom-qsa": 1,
    "dom-qsa2.1": 1,
    "dom-qsa3": 1,
    "dom-matches-selector": 1,
    "json-stringify": 1,
    "json-parse": 1,
    "bug-for-in-skips-shadowed": 0,
    "native-xhr": 1,
    "native-xhr2": 1,
    "native-formdata": 1,
    "native-response-type": 1,
    "native-xhr2-blob": 1,
    "dom-parser": 1,
    "activex": 0,
    "script-readystatechange": 1,
    "ie-event-behavior": 0,
    "MSPointer": 0,
    "touch-action": 1,
    "dom-quirks": 0,
    "array-extensible": 1,
    "console-as-object": 1,
    "jscript": 0,
    "event-focusin": 1,
    "events-mouseenter": 1,
    "events-mousewheel": 1,
    "event-orientationchange": 1,
    "event-stopimmediatepropagation": 1,
    "touch-can-modify-event-delegate": 0,
    "dom-textContent": 1,
    "dom-attributes-explicit": 1,

    // unsupported browsers
    "air": 0,
    "wp": 0,
    "khtml": 0,
    "wii": 0,
    "quirks": 0,
    "bb": 0,
    "msapp": 0,
    "opr": 0,
    "android": 0,

    "svg": 1,

    // Deferred Instrumentation is disabled by default in the built version
    // of the API but we still want to enable users to activate it.
    // Set to -1 so the flag is not removed from the built version.
    "config-deferredInstrumentation": -1,

    // Dojo loader will have "has" api, but other loaders such as
    // RequireJS do not. So, let"s not mark it static.
    // This will allow RequireJS loader to fetch our modules.
    "dojo-has-api": -1,

    "dojo-inject-api": 1,
    "dojo-loader": 1,
    "dojo-log-api": 0,
    "dojo-modulePaths": 0,
    "dojo-moduleUrl": 0,
    "dojo-publish-privates": 0,
    "dojo-requirejs-api": 0,
    "dojo-sniff": 0,
    "dojo-sync-loader": 0,
    "dojo-test-sniff": 0,
    "dojo-timeout-api": 0,
    "dojo-trace-api": 0,
    //"dojo-undef-api": 0,
    "dojo-v1x-i18n-Api": 1, // we still need i18n.getLocalization
    "dojo-xhr-factory": 0,
    "dom": -1,
    "host-browser": -1,
    "extend-dojo": 1,
    "extend-esri": 0,
    
    "esri-webpack": 0
  },
  defaultConfig: {
    baseUrl: "dojo",
    async: 1,
    hasCache: {
      // these are the values given above, not-built client code may test for these so they need to be available
      "dojo-built": 1,
      "dojo-loader": 1,
      "dojo-undef-api": 0,
      dom: 1,
      "host-browser": 1,

      // Disable deferred instrumentation by default in the built version.
      "config-deferredInstrumentation": 0,

      // Dojo loader has built-in "has" api. Since dojoConfig is used
      // by Dojo loader, we can set the default here.
      "dojo-has-api": 1,

      // default
      "config-selectorEngine": "lite",

      "esri-featurelayer-webgl": 0,

      "esri-promise-compatibility": 0,
      "esri-promise-compatibility-deprecation-warnings": 1
    },
    aliases: [
      [/^webgl-engine/, function(){return "esri/views/3d/webgl-engine";}],
      [/^engine/, function(){return "esri/views/3d/webgl-engine";}],
      [/^esri-hydra/, function(){return "esri";}]
    ],
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
    ]
  }
};
