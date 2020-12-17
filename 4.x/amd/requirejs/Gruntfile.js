const babel = require('@babel/core');

module.exports = function (grunt) {
  // additional build customizations are up to the developer to implement.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-run');
  grunt.initConfig({
    clean: {
      build: {
        src: ['dist/'],
      },
    },
    dest: 'dist',
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/arcgis-js-api',
            src: ['assets/**'],
            dest: './dist/',
          },
          {
            expand: true,
            cwd: 'node_modules/arcgis-js-api',
            src: ['**/*'],
            dest: './dist/esri/',
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['built.html'],
            dest: './dist/',
            rename(dest, src) {
              return dest + 'index.html';
            },
          },
        ],
      },
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          appDir: '.',
        },
      },
      single: {
        options: {
          cwd: './',
          baseUrl: './src',
          name: 'app/main',
          out: './dist/app/main.js',
          paths: {
            esri: '../node_modules/arcgis-js-api',
            'regenerator-runtime': '../node_modules/regenerator-runtime'
          },
          throwWhen: { optimize: false },
          optimize: 'none',
          onBuildRead(moduleName, path, content) {
            return babel.transform(content, {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-regenerator']
            }).code;
          },
          include: [
              'regenerator-runtime/runtime',
              'esri/views/webgl',
              // These are modules you will need to
              // determine via network traffic if
              // they need to be added to build
              'esri/views/2d/mapViewDeps',
              'esri/identity/IdentityManager',
              'esri/views/2d/layers/FeatureLayerView2D',
              'esri/layers/support/layersCreator',
              'esri/layers/TileLayer',
              'esri/portal/support/layersLoader',
              'esri/views/2d/layers/TileLayerView2D',
              'esri/symbols/support/previewSymbol2D',
              'esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer'
          ]
        },
      },
    },
    run: {
      terser: {
        cmd: 'terser',
        args: [
          'dist/app/main.js',
          '-c',
          '-o',
          'dist/app/main.js'
        ]
      }
    }
  });

  grunt.registerTask('build', ['clean', 'requirejs:single', 'run', 'copy']);
};
