module.exports = function (grunt) {
  // Build customizations would be left up to developer to implement.
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var sassFiles = ['src/**/*.scss'];
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    clean: {
      build: {
        src: ['dist/']
      },
      uncompressed: {
        src: [
          'dist/**/*.uncompressed.js'
        ]
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['built.html'],
          dest: './dist/',
          rename: function(dest, src) {
            return dest + 'index.html';
          }
        }]
      }
    },
    dojo: {
      dist: {
        options: {
          releaseDir: '../dist',
        }
      },
      options: {
        profile: 'build.profile.js',
        dojo: 'src/dojo/dojo.js',
        load: 'build',
        cwd: './',
        basePath: './src'
      }
    },

    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: [{
          expand: true,
          src: sassFiles,
          ext: '.css'
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
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'dojo', 'copy', 'clean:uncompressed']);

};
