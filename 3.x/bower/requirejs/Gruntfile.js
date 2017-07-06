module.exports = function (grunt) {
  // additional build customizations are up to the developer to implement.
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
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
          src: ["esri/**", "dijit/templates/**", "dijit/form/templates/**"],
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
            "dgrid1": "empty:",
            "dstore": "empty:",
            "put-selector": "empty:",
            "xstyle": "empty:",
            "moment": "empty:"
          },
          fileExclusionRegExp: /test|tests|demos|esri|min|src|templates/g
        }
      },
      single: {
        options: {
          cwd: "./",
          baseUrl: "./src",
          name: "app/main",
          out: "./dist/app/main.js",
          locale: "en-us",
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
            "esri/dijit/Attribution",
            "esri/IdentityManager"
          ],
          exclude: [
            "dojo/domReady",
            "dojo/has",
            "xstyle",
            "dgrid",
            "dojo/i18n", // some methods not available with RequireJS
            "esri/layers/VectorTileLayer"
          ],
          inlineText: true,
          //optimize: "none",
          optimize: "uglify2",
          paths: {
            "moment/templates": "empty:",
            "dgrid": "empty:",
            "xstyle": "empty:",
            "esri/moment": "empty:",
            "esri/layers/GraphicsLayer": "empty:",
            "dgrid1/demos": "empty:",
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
              "dgrid1",
              "xstyle",
              "esri"
          ],
          fileExclusionRegExp: /test|tests|min|src/g,
          throwWhen: { optimize: false  }
        }
      },
      vtlayer: {
        options: {
          cwd: "./",
          baseUrl: "./src",
          name: "esri/layers/VectorTileLayerImpl",
          out: "./dist/esri/layers/VectorTileLayerImpl.js",
          locale: "en-us",
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
          exclude: [
            "dojo/domReady",
            "dojo/has",
            "xstyle",
            "dgrid",
            "dojo/i18n", // some methods not available with RequireJS
            "esri/layers/VectorTileLayer"
          ],
          inlineText: true,
          //optimize: "none",
          optimize: "uglify2",
          paths: {
            "moment/templates": "empty:",
            "dgrid": "empty:",
            "xstyle": "empty:",
            "esri/moment": "empty:",
            "esri/layers/GraphicsLayer": "empty:",
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
            "dgrid1",
            "xstyle",
            "esri"
          ],
          fileExclusionRegExp: /test|tests|min|src/g,
          throwWhen: { optimize: false  }
        }
      },
      esricss: {
        options: {
          cwd: "./",
          cssIn: "./src/esri/css/esri.css",
          out: "./dist/esri/css/esri.css",
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
      }
    }
  });

  grunt.registerTask("build", ["clean", "requirejs:support", "copy", "requirejs:single", "requirejs:vtlayer", "requirejs:esricss", "requirejs:dijitcss"]);
};
