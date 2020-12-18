var DIR = "../node_modules/";

var layers = {
  "dojo/dojo": {
    include: [
      "app/main",

      "esri/Map",
      "esri/geometry",
      "esri/Viewpoint",

      "esri/layers/Layer",
      "esri/layers/mixins/OperationalLayer",
      "esri/layers/mixins/PortalLayer",
      "esri/layers/mixins/ScaleRangeLayer",
      "esri/layers/mixins/RefreshableLayer",
      "esri/layers/support/layersCreator",

      "esri/layers/FeatureLayer",
      "esri/layers/graphics/sources/MemorySource",
      "esri/layers/graphics/sources/FeatureLayerSource",

      "esri/views/View",
      "esri/views/ViewAnimation",
      "esri/views/layers/LayerView",

      "esri/widgets/Widget",
      "esri/widgets/support/widget"
    ],
    customBase: true,
    boot:       true
  },

  "esri/identity/IdentityManager": {
    include: [
      "esri/identity/IdentityManager"
    ]
  },

  "esri/support/arcadeUtils": {
    include: [
      "esri/support/arcadeUtils"
    ]
  },

  "esri/views/webgl": {
    include: [
      "esri/views/webgl"
    ]
  },

  "esri/core/sql/WhereClause": {
    include: [
      "esri/core/sql/WhereClause"
    ]
  },

  //--------------------------------------------------------------------------
  //
  //  Map
  //
  //--------------------------------------------------------------------------

  "esri/WebMap": {
    include: [
      "esri/WebMap"
    ]
  },

  "esri/views/MapView": {
    include: [
      "esri/views/MapView"
    ],
    exclude: [
      "esri/widgets/support/widget"
    ]
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
    exclude: [
      "esri/views/MapView",
      "esri/views/webgl"
    ]
  },

  //--------------------------------------------------------------------------
  //
  //  Scene
  //
  //--------------------------------------------------------------------------

  "esri/WebScene": {
    include: [
      "esri/WebScene"
    ]
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
      "esri/views/3d/layers/TiledLayerView3D"
    ],
    exclude: [
      "esri/widgets/support/widget"
    ]
  },

  "esri/views/3d/interactive/editingTools": {
    include: [
      "esri/views/3d/interactive/editingTools"
    ],
    exclude: [
      "esri/views/SceneView"
    ]
  },

  //--------------------------------------------------------------------------
  //
  //  Layers
  //
  //--------------------------------------------------------------------------

  "esri/layers/TileLayer": {
    include: [
      "esri/layers/TileLayer"
    ]
  },

  "esri/layers/MapImageLayer": {
    include: [
      "esri/layers/MapImageLayer"
    ]
  },

  "esri/layers/VectorTileLayer": {
    include: [
      "esri/layers/VectorTileLayer"
    ]
  },

  "esri/layers/ImageryLayer": {
    include: [
      "esri/layers/ImageryLayer"
    ]
  },

  "esri/layers/ImageryTileLayer": {
    include: [
      "esri/layers/ImageryTileLayer"
    ]
  },

  //--------------------------------------------------------------------------
  //
  //  LayerView2D
  //
  //--------------------------------------------------------------------------

  "esri/views/2d/layers/TileLayerView2D": {
    include: [
      "esri/views/2d/layers/TileLayerView2D"
    ],
    exclude: [
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  "esri/views/2d/layers/VectorTileLayerView2D": {
    include: [
      "esri/views/2d/layers/VectorTileLayerView2D"
    ],
    exclude: [
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  "esri/views/2d/layers/FeatureLayerView2D": {
    include: [
      "esri/views/2d/layers/FeatureLayerView2D"
    ],
    exclude: [
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  "esri/views/2d/layers/ImageryLayerView2D": {
    include: [
      "esri/views/2d/layers/ImageryLayerView2D"
    ],
    exclude: [
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  "esri/views/2d/layers/ImageryTileLayerView2D": {
    include: [
      "esri/views/2d/layers/ImageryTileLayerView2D"
    ],
    exclude: [
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  "esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer": {
    include: [
      "esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer"
    ],
    exclude: [
      "esri/views/2d/layers/FeatureLayerView2D",
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  "esri/views/2d/layers/features/tileRenderers/HeatmapTileRenderer": {
    include: [
      "esri/views/2d/layers/features/tileRenderers/HeatmapTileRenderer"
    ],
    exclude: [
      "esri/views/2d/layers/FeatureLayerView2D",
      "esri/views/MapView",
      "esri/views/2d/mapViewDeps",
      "esri/views/webgl"
    ]
  },

  //--------------------------------------------------------------------------
  //
  //  Widget
  //
  //--------------------------------------------------------------------------,

  "esri/widgets/Editor": {
    include: [
      "esri/widgets/Editor"
    ]
  },

  "esri/widgets/Feature": {
    include: [
      "esri/widgets/Feature"
    ]
  },

  "esri/widgets/LayerList": {
    include: [
      "esri/widgets/LayerList"
    ]
  },

  "esri/widgets/Legend": {
    include: [
      "esri/widgets/Legend"
    ]
  },

  "esri/widgets/Search": {
    include: [
      "esri/widgets/Search"
    ]
  },

  "esri/widgets/Sketch": {
    include: [
      "esri/widgets/Sketch"
    ]
  }
};

var profile = {

    basePath:      "./src",

    action:        "release",
    optimize:      "closure", // requires Java 7 or later: https://github.com/google/closure-compiler/wiki/FAQ
    layerOptimize: "closure",
    useSourceMaps: false,
    cssOptimize:   "comments",
    copyTests:     false,
    internStrings: true,
    mini:          true,

    selectorEngine: "lite",
    stripConsole:   "none",

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
      }
    ],

    defaultConfig: {
      baseUrl: "dojo",
      async: 1
    },

    dojoBootText: "require.boot && require.apply(null, require.boot);",

    // since this build it intended to be utilized with properly-expressed AMD modules;
    // don't insert absolute module ids into the modules
    insertAbsMids: 0,

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
      "dojo-v1x-i18n-Api": 1,
      "dojo-xhr-factory": 0,
      "dom": -1,
      "host-browser": -1,
      "extend-dojo": 1
    },

    // http://dojotoolkit.org/documentation/tutorials/1.10/build/

    noref: true, // force consuming/caching layers on load (TODO: still needed?)

    layers,

    optimizeOptions: {
      languageIn: "ECMASCRIPT_2019",
      languageOut: "NO_TRANSPILE",
      checkSuspiciousCode: false,
      uselessCode: "OFF"
    }
};
