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
    languageIn: "ECMASCRIPT_2019",
    languageOut: "NO_TRANSPILE",
    checkSuspiciousCode: false,
    uselessCode: "OFF"
  },

  // `basePath` is relative to the directory containing this profile file; in this case, it is being set to the
  // src/ directory, which is the same place as the `baseUrl` directory in the loader configuration.
  basePath: "./src",

  action: "release",
  optimize: "closure", // requires Java 8 or later: https://github.com/google/closure-compiler/wiki/FAQ
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
      name: "dojo",
      location: DIR + "/dojo",
    },
    {
      name: "esri",
      location: DIR + "/arcgis-js-api",
      trees: [
        // don"t bother with .hidden, tests, min, src, and templates
        [".", ".", /(\/\.)|(~$)|(node_modules)/],
      ]
    },
    {
      name: "@dojo",
      location: DIR + "/@dojo",
      resourceTags: {
        miniExclude: function (filename, mid) {
          if (filename.slice(-4) === ".mjs") {
            return true;
          }
          if (
            filename.indexOf("@dojo/framework/node_modules/") > -1 ||
            filename.indexOf("@dojo/framework/shim/util/") > -1 ||
            filename.indexOf("@dojo/framework/testing/") > -1
          ) {
            return true;
          }
          return (
            [
              "@dojo/framework/shim/browser", // requires pepjs, intersection-observer, and web-animations-js
              "@dojo/framework/shim/pointerEvents",
              "@dojo/framework/shim/IntersectionObserver",
              "@dojo/framework/shim/ResizeObserver",
              "@dojo/framework/shim/WebAnimations",
              "@dojo/framework/widget-core/meta/Intersection",
              "@dojo/framework/widget-core/meta/Resize",
              "@dojo/framework/widget-core/meta/WebAnimation",
            ].indexOf(mid) > -1
          );
        },
      },
    },
    {
      name: "cldrjs",
      location: DIR + "/cldrjs",
      main: "dist/cldr",
      resourceTags: {
        miniExclude: function (filename, mid) {
          return mid.indexOf("/node_main") > -1 || mid.indexOf("/doc/") > -1;
        },
      },
    },
    {
      name: "globalize",
      location: DIR + "/globalize",
      main: "dist/globalize",
      resourceTags: {
        miniExclude: function (filename, mid) {
          return (
            mid.indexOf("/CONTRIBUTING") > -1 ||
            mid.indexOf("/node-main") > -1 ||
            mid.indexOf("/doc/") > -1 ||
            mid.indexOf("/examples/") > -1
          );
        },
      },
    },
    {
      name: "maquette-jsx",
      location: DIR + "/maquette-jsx",
      main: "dist/maquette-jsx.umd",
      resourceTags: {
        miniExclude: function (filename, mid) {
          return (
            mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1
          );
        },
      },
    },
    {
      name: "maquette-css-transitions",
      location: DIR + "/maquette-css-transitions",
      main: "dist/maquette-css-transitions.umd",
      resourceTags: {
        miniExclude: function (filename, mid) {
          return (
            mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1
          );
        },
      },
    },
    {
      name: "tslib",
      location: DIR + "/tslib",
      main: "tslib",
      resourceTags: {
        miniExclude: function (filename, mid) {
          return (
            mid.indexOf("/tslib.es6") > -1 ||
            mid.indexOf("/tslib.html") > -1 ||
            mid.indexOf("/docs/") > -1
          );
        },
      },
    },
    {
      name: "whatwg-fetch",
      location: DIR + "./whatwg-fetch",
      main: "dist/fetch.umd",
      resourceTags: {
        miniExclude: function (filename, mid) {
          if (filename.slice(-5) === ".flow") {
            return true;
          }
          return filename.indexOf("/fetch.js") > -1;
        },
      },
    },
  ],

  // this is also set on defaultConfig at the bottom of this file
  map: {
    globalize: {
      cldr: "cldrjs/dist/cldr",
      "cldr/event": "cldrjs/dist/cldr/event",
      "cldr/supplemental": "cldrjs/dist/cldr/supplemental",
      "cldr/unresolved": "cldrjs/dist/cldr/unresolved",
    },
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
        // include the app, set accordingly for your application
        "app/main",

        "esri/Map",
        "esri/geometry",
        "esri/Viewpoint",

        "esri/layers/Layer",
        "esri/layers/mixins/OperationalLayer",
        "esri/layers/mixins/PortalLayer",
        "esri/layers/mixins/ScaleRangeLayer",
        "esri/layers/mixins/RefreshableLayer",

        "esri/layers/FeatureLayer",
        "esri/layers/graphics/sources/MemorySource",
        "esri/layers/graphics/sources/FeatureLayerSource",

        "esri/views/View",
        "esri/views/ViewAnimation",
        "esri/views/layers/LayerView",

        "esri/widgets/Widget",
        "esri/widgets/support/widget",

        // for workers
        "esri/config",
        "esri/kernel",
        "esri/core/workers/RemoteClient",
        "esri/core/workers/request",
        "esri/views/2d/engine/vectorTiles/WorkerTileHandler",
      ],
    },

    "esri/identity/IdentityManager": {
      include: ["esri/identity/IdentityManager"],
    },

    "esri/support/arcadeUtils": {
      include: ["esri/support/arcadeUtils"],
    },

    "esri/views/webgl": {
      include: ["esri/views/webgl"],
    },

    "esri/core/sql/WhereClause": {
      include: ["esri/core/sql/WhereClause"],
    },

    //--------------------------------------------------------------------------
    //
    //  Map
    //
    //--------------------------------------------------------------------------

    "esri/WebMap": {
      include: ["esri/WebMap"],
    },

    "esri/views/MapView": {
      include: ["esri/views/MapView"],
      exclude: ["esri/widgets/support/widget"],
    },

    "esri/views/2d/mapViewDeps": {
      include: [
        "esri/views/2d/mapViewDeps",

        "esri/core/libs/gl-matrix-2/mat4",
        "esri/core/libs/gl-matrix-2/mat4f32",
        "esri/core/libs/gl-matrix-2/vec3f32",
        "esri/core/libs/gl-matrix-2/vec4f32",

        "esri/geometry/support/quantizationUtils",

        "esri/layers/graphics/featureConversionUtils",

        "esri/symbols/cim/CIMSymbolHelper",

        "esri/views/2d/engine/Bitmap",
        "esri/views/2d/engine/BitmapContainer",
        "esri/views/2d/engine/BitmapTile",
        "esri/views/2d/engine/BitmapTileContainer",
        "esri/views/2d/engine/Container",
        "esri/views/2d/engine/DisplayObject",
        "esri/views/2d/engine/LevelDependentSizeVariable",
        "esri/views/2d/engine/Stage",
        "esri/views/2d/engine/webgl/AttributeStoreView",
        "esri/views/2d/engine/webgl/collisions/CollisionGrid",
        "esri/views/2d/engine/webgl/collisions/CollisionEngine",
        "esri/views/2d/engine/webgl/collisions/LayerViewSorter",
        "esri/views/2d/engine/webgl/Geometry",
        "esri/views/2d/engine/webgl/alignmentUtils",
        "esri/views/2d/engine/webgl/color",
        "esri/views/2d/engine/webgl/definitions",
        "esri/views/2d/engine/webgl/enums",
        "esri/views/2d/engine/webgl/fontUtils",
        "esri/views/2d/engine/webgl/Utils",
        "esri/views/2d/engine/webgl/util/debug",
        "esri/views/2d/engine/webgl/materialKey/MaterialKey",
        "esri/views/2d/engine/webgl/mesh/templates/shapingUtils",
        "esri/views/2d/engine/webgl/TileClipper",
        "esri/views/2d/engine/webgl/TileContainer",
        "esri/views/2d/engine/webgl/TurboLine",
        "esri/views/2d/engine/webgl/mesh/factories/matcherUtils",
        "esri/views/2d/engine/webgl/mesh/factories/WGLMeshFactory",
        "esri/views/2d/engine/webgl/mesh/MeshData",
        "esri/views/2d/engine/webgl/mesh/templates/WGLTemplateStore",
        "esri/views/2d/engine/webgl/Painter",
        "esri/views/2d/engine/webgl/TileData",
        "esri/views/2d/engine/webgl/util/BidiText",
        "esri/views/2d/engine/webgl/util/Matcher",
        "esri/views/2d/engine/webgl/util/vvFlagUtils",
        "esri/views/2d/engine/webgl/visualVariablesUtils",
        "esri/views/2d/engine/webgl/WGLRendererInfo",
        "esri/views/2d/engine/webgl/WGLTile",
        "esri/views/2d/engine/webgl/BitBlitRenderer",
        "esri/views/2d/engine/webgl/shaders/MagnifierPrograms",
        "esri/views/2d/engine/webgl/Rect",
        "esri/views/2d/engine/webgl/mesh/templates/util",
        "esri/views/2d/engine/webgl/painter/RenderPass",
        "esri/views/2d/engine/webgl/TiledDisplayObject",
      ],
      exclude: ["esri/views/MapView", "esri/views/webgl"],
    },

    //--------------------------------------------------------------------------
    //
    //  Scene
    //
    //--------------------------------------------------------------------------

    "esri/WebScene": {
      include: ["esri/WebScene"],
    },

    "esri/views/SceneView": {
      include: [
        "esri/views/SceneView",
        "esri/layers/SceneLayer",
        "esri/views/3d/layers/ElevationLayerView3D",
        "esri/views/3d/layers/FeatureLayerView3D",
        "esri/views/3d/layers/PointCloudLayerView3D",
        "esri/views/3d/layers/SceneLayerView3D",
        "esri/views/3d/layers/SceneLayerGraphicsView3D",
        "esri/views/3d/layers/TiledLayerView3D",
      ],
      exclude: ["esri/widgets/support/widget"],
    },

    "esri/views/3d/interactive/editingTools": {
      include: ["esri/views/3d/interactive/editingTools"],
      exclude: ["esri/views/SceneView"],
    },

    //--------------------------------------------------------------------------
    //
    //  Layers
    //
    //--------------------------------------------------------------------------

    "esri/layers/TileLayer": {
      include: ["esri/layers/TileLayer"],
    },

    "esri/layers/MapImageLayer": {
      include: ["esri/layers/MapImageLayer"],
    },

    "esri/layers/VectorTileLayer": {
      include: ["esri/layers/VectorTileLayer"],
    },

    "esri/layers/ImageryLayer": {
      include: ["esri/layers/ImageryLayer"],
    },

    "esri/layers/ImageryTileLayer": {
      include: ["esri/layers/ImageryTileLayer"],
    },

    //--------------------------------------------------------------------------
    //
    //  LayerView2D
    //
    //--------------------------------------------------------------------------

    "esri/views/2d/layers/TileLayerView2D": {
      include: ["esri/views/2d/layers/TileLayerView2D"],
      exclude: [
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    "esri/views/2d/layers/VectorTileLayerView2D": {
      include: ["esri/views/2d/layers/VectorTileLayerView2D"],
      exclude: [
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    "esri/views/2d/layers/FeatureLayerView2D": {
      include: ["esri/views/2d/layers/FeatureLayerView2D"],
      exclude: [
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    "esri/views/2d/layers/ImageryLayerView2D": {
      include: ["esri/views/2d/layers/ImageryLayerView2D"],
      exclude: [
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    "esri/views/2d/layers/ImageryTileLayerView2D": {
      include: ["esri/views/2d/layers/ImageryTileLayerView2D"],
      exclude: [
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    "esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer": {
      include: [
        "esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer",
      ],
      exclude: [
        "esri/views/2d/layers/FeatureLayerView2D",
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    "esri/views/2d/layers/features/tileRenderers/HeatmapTileRenderer": {
      include: [
        "esri/views/2d/layers/features/tileRenderers/HeatmapTileRenderer",
      ],
      exclude: [
        "esri/views/2d/layers/FeatureLayerView2D",
        "esri/views/MapView",
        "esri/views/2d/mapViewDeps",
        "esri/views/webgl",
      ],
    },

    //--------------------------------------------------------------------------
    //
    //  Widget
    //
    //--------------------------------------------------------------------------,

    "esri/widgets/Editor": {
      include: ["esri/widgets/Editor"],
    },

    "esri/widgets/Feature": {
      include: ["esri/widgets/Feature"],
    },

    "esri/widgets/LayerList": {
      include: ["esri/widgets/LayerList"],
    },

    "esri/widgets/Legend": {
      include: ["esri/widgets/Legend"],
    },

    "esri/widgets/Search": {
      include: ["esri/widgets/Search"],
    },

    "esri/widgets/Sketch": {
      include: ["esri/widgets/Sketch"],
    },

    //--------------------------------------------------------------------------
    //
    //  Workers
    //
    //--------------------------------------------------------------------------

    "esri/layers/graphics/sources/geojson/GeoJSONSourceWorker": {
      include: ["esri/layers/graphics/sources/geojson/GeoJSONSourceWorker"],
    },
    "esri/layers/graphics/sources/support/CSVSourceWorker": {
      include: ["esri/layers/graphics/sources/support/CSVSourceWorker"],
    },
    "esri/layers/graphics/sources/support/MemorySourceWorker": {
      include: ["esri/layers/graphics/sources/support/MemorySourceWorker"],
    },
    "esri/layers/support/LercWorker": {
      include: ["esri/layers/support/LercWorker"],
    },
    "esri/views/2d/layers/features/Pipeline": {
      include: [
        "esri/views/2d/layers/features/Pipeline",
        "esri/views/2d/layers/features/controllers/FeatureController2D",
        "esri/views/2d/layers/features/processors/SymbolProcessor",
      ],
    },
    "esri/views/3d/support/PBFDecoderWorker": {
      include: ["esri/views/3d/support/PBFDecoderWorker"],
    },
    "esri/views/3d/layers/PointCloudWorker": {
      include: ["esri/views/3d/layers/PointCloudWorker"],
    },
    "esri/layers/support/RasterWorker": {
      include: ["esri/layers/support/RasterWorker"],
    },
    "esri/views/3d/layers/SceneLayerWorker": {
      include: ["esri/views/3d/layers/SceneLayerWorker"],
    },
    "esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker": {
      include: [
        "esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker",
      ],
    },
    "esri/geometry/support/meshUtils/ElevationSamplerWorker": {
      include: ["esri/geometry/support/meshUtils/ElevationSamplerWorker"],
    },
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
    activex: 0,
    "script-readystatechange": 1,
    "ie-event-behavior": 0,
    MSPointer: 0,
    "touch-action": 1,
    "dom-quirks": 0,
    "array-extensible": 1,
    "console-as-object": 1,
    jscript: 0,
    "event-focusin": 1,
    "events-mouseenter": 1,
    "events-mousewheel": 1,
    "event-orientationchange": 1,
    "event-stopimmediatepropagation": 1,
    "touch-can-modify-event-delegate": 0,
    "dom-textContent": 1,
    "dom-attributes-explicit": 1,

    // unsupported browsers
    air: 0,
    wp: 0,
    khtml: 0,
    wii: 0,
    quirks: 0,
    bb: 0,
    msapp: 0,
    opr: 0,
    android: 0,

    svg: 1,

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
    dom: -1,
    "host-browser": -1,
    "extend-dojo": 1,
    "extend-esri": 0,

    // this should only be set for builds using this profile since the code will
    // then assume that it means there is a dojo-lite.js available
    "esri-built": 1,

    // enables logging the current version of the API in the console in esri/kernel
    // see also "esri-next" static has flag below which controls the message content
    "esri-console-log-version": 1,

    // Used to denote non-final release version in esri/kernel
    "esri-next": 0,

    // For CDN and downloadable builds.
    // This flag is only for NPM installed versions of the API when
    // used for custom builds in Webpack.
    "esri-webpack": 0, // TODO: still needed?

    // for WebGL instance count debugging
    "esri-webgl-debug": 0,
    "esri-2d-debug": 0,

    "esri-feature-tiles-debug": 0,
    "esri-feature-highlight-debug": 0,

    // Used to stabilize WebGL feature layer and vector tile layer during screenshot testing.
    "stable-symbol-rendering": 0,

    // Used to output tile processing performance info
    "esri-tiles-performance": 0,

    // this is set to true in dojo-config.js
    "esri-validate-shaders": 0,

    // disable debug messages
    "esri-debug-messages": 0,
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

      "esri-console-log-version": 0,

      "esri-promise-compatibility": 1,
      "esri-promise-compatibility-deprecation-warnings": 1,

      "esri-built": 0,
    },
    aliases: [
      [
        /^webgl-engine/,
        function () {
          return "esri/views/3d/webgl-engine";
        },
      ],
      [
        /^engine/,
        function () {
          return "esri/views/3d/webgl-engine";
        },
      ],
      [
        /^esri-hydra/,
        function () {
          return "esri";
        },
      ],
    ],
    packages: [
      {
        name: "app",
        location: "../app",
      },
      {
        name: "esri",
        location: "../esri",
      },
      {
        name: "moment",
        location: "../moment",
        main: "moment",
      },
    ],
    map: {
      globalize: {
        cldr: "cldrjs/dist/cldr",
        "cldr/event": "cldrjs/dist/cldr/event",
        "cldr/supplemental": "cldrjs/dist/cldr/supplemental",
        "cldr/unresolved": "cldrjs/dist/cldr/unresolved",
      },
    },
  },
};
