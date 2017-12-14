module.exports = function (grunt) {
  // Build customizations would be left up to developer to implement.
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");

  var sassFiles = ["src/**/*.scss"];
  grunt.loadNpmTasks("grunt-sass");

  grunt.initConfig({
    clean: {
      build: {
        src: ["dist/"]
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["esri/**"],
          dest: "./dist/"
        }, {
          expand: true,
          cwd: "src/",
          src: ["built.html"],
          dest: "./dist/",
          rename: function(dest, src) {
            return dest + "index.html";
          }
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          appDir: ".",
          preserveLicenseComments: false,
        }
      },
      support: {
        options: {
          baseUrl: "./src",
          dir: "./dist",
          optimize: "uglify2",
          optimizeCss: "standard.keepLines.keepWhitespace",
          throwWhen: { optimize: false  },
          preserveLicenseComments: false,
          paths: {
            "esri": "empty:",
            "dojo": "empty:",
            "dojo-themes": "empty:",
            "dijit": "empty:",
            "dojox": "empty:",
            "dgrid": "empty:",
            "dstore": "empty:",
            "moment": "empty:",
            "moment/templates": "empty:",
          },
          fileExclusionRegExp: /test|tests|esri|min|src|demo|demos/g
        }
      },
      single: {
        options: {
          cwd: "./",
          baseUrl: "./src",
          name: "app/main",
          out: "./dist/app/main.js",
          preserveLicenseComments: false,
          //locale: "en-en",
          // has.js is equivalent, but doesn"t seem to work
          // during RequireJS Optimizer build process
          has: {
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
            "pointer-events": 1,
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
        
            // support
            air: 0,
            wp: 0,
            khtml: 0,
            wii: 0,
            quirks: 0,
            bb: 0,
            trident: 0,
            msapp: 0,
            opr: 0,
            android: 0,
            edge: 1,
            mac: 1,
            mozilla: 1,
            ff: 1,
        
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
            "extend-esri": 0
          },
          /*
           * What"s important when setting up paths and using exclude is
           * that you exclude any plugins that may throw error in build process.
           * This will usually include dojo/i18n, but could also include dojo/domReady,
           * dojo/has or dojo/text. You will notice that the paths are mapped to the
           * RequireJS counterpart, but not included in build. These plugins are not always
           * interchangeable between Dojo and RequireJS, so they must be loaded dynamically.
           * This is a limitation to how the RequireJS optimizer tries to run the plugins in
           * a node environment.
           */
          include: [
            "requirejs/require",
            "dojo/_base/browser",
            "esri/core/request/script",
            "dojo/errors/RequestError",
            "dojo/errors/RequestTimeoutError",

            "dojo/NodeList-dom"
          ],
          exclude: [
            "dojo/domReady",
            "esri/core/request/script",
            "esri/views/SceneView",
            "esri/widgets/Search",
            "esri/Map",
            "dojo/has",
            "dojo/_base/browser",
            "dgrid",
            "dojo/i18n", // some methods not available with RequireJS
          ],
          inlineText: true,
          //optimize: "none",
          optimize: "uglify2",
          paths: {
            "moment/templates": "empty:",
            "esri/moment": "empty:",
            "esri/views/SceneView": "empty:",
            "esri/widgets/Search": "empty:",
            "esri/Map": "empty:",
            "esri/core/request/script": "empty:",
            "dgrid": "empty:",
            "dojo/_base/browser": "empty:",
            "dojo/request": "empty:",
            "dojo/query": "empty:", // becasue css selector engine is dynamically loaded
            "dojox/gfx": "empty:", // because this dynamically loads a renderer
            "dojo/i18n": "i18n/i18n", // only needed to get build working
            "dojo/text": "text/text",
            "dojo/domReady": "domReady/domReady"
          },
          packages: [
            "dojo",
            "dijit",
            "dojox",
            "dgrid",
            "esri"
          ],
          throwWhen: { optimize: false  }
        }
      },
      esricss: {
        options: {
          cwd: "./",
          cssIn: "./src/esri/css/main.css",
          out: "./dist/esri/css/main.css",
          optimizeCss: "standard"
        }
      },
      dijitcss: {
        options: {
          cwd: "./",
          cssIn: "./src/dijit/themes/nihilo/nihilo.css",
          out: "./dist/dijit/themes/nihilo/nihilo.css",
          optimizeCss: "standard"
        }
      },

      sass: {
        options: {
          outputStyle: "compressed"
        },
        dist: {
          files: [{
            expand: true,
            src: sassFiles,
            ext: ".css"
          }]
        }
      },
      watch: {
        sass: {
          options: {
            interval: 5007, // keeps CPU usage low
            spawn: false
          },
          files: sassFiles,
          tasks: ["sass"]
        }
      }
    }
  });

  grunt.registerTask("build", ["clean", "requirejs:support", "requirejs:single", "requirejs:esricss", "requirejs:dijitcss", "copy"]);
};
