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
          appDir: "."
        }
      },
      support: {
        options: {
          baseUrl: "./src",
          dir: "./dist",
          optimize: "uglify2",
          optimizeCss: "standard.keepLines.keepWhitespace",
          throwWhen: { optimize: false  },
          paths: {
            "esri": "empty:",
            "dojo": "empty:",
            "dijit": "empty:",
            "dojox": "empty:",
            "dgrid": "empty:",
            "dstore": "empty:",
            "moment": "empty:"
          },
          fileExclusionRegExp: /test|tests|esri|min|src|templates|demo|demos/g
        }
      },
      single: {
        options: {
          cwd: "./",
          baseUrl: "./src",
          name: "app/main",
          out: "./dist/app/main.js",
          //locale: "en-en",
          // has.js is equivalent, but doesn"t seem to work
          // during RequireJS Optimizer build process
          has: {
            "config-selectorEngine": "acme",
            "dojo-trace-api": 0,
            "dojo-log-api": 0,
            "dojo-publish-privates": 0,
            "dojo-sync-loader": 0,
            "dojo-xhr-factory": 0,
            "dojo-test-sniff": 0,
            "dom": 1,
            "extend-esri": 0,
            "dojo-has-api": 1,
            "dojo-undef-api": 0
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
            "dojo/io/script",
            "dojo/io/iframe",
            "dojo/errors/RequestError",
            "dojo/errors/RequestTimeoutError",

            "dojo/NodeList-dom",
            "esri/portal/support/layersCreator",
            "esri/views/3d/layers/VectorTileLayerView3D",
            "esri/views/3d/layers/ElevationLayerView3D",
            "esri/views/3d/webgl-engine/lib/FloatingBoxLocalOriginFactory",
            "esri/views/3d/webgl-engine/lib/Layer",
            "esri/views/3d/webgl-engine/lib/MaterialCollection",
            "esri/views/3d/webgl-engine/lib/Octree",
            "esri/views/3d/webgl-engine/lib/TextTextureAtlas"
          ],
          exclude: [
            "dojo/domReady",
            "dojo/has",
            "dgrid",
            "dojo/i18n", // some methods not available with RequireJS
          ],
          inlineText: true,
          //optimize: "none",
          optimize: "uglify2",
          paths: {
            "moment/templates": "empty:",
            "esri/moment": "empty:",
            "dgrid": "empty:",
            "dojo/request": "empty:",
            "dojo/query": "empty:", // becasue css selector engine is dynamically loaded
            "dojox/gfx": "empty:", // because this dynamically loads a renderer
            "dojo/i18n": "i18n/i18n", // only needed to get build working
            "dojo/text": "text/text",
            "dojo/domReady": "domReady/domReady"
          },
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
