var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var spawn = require('child_process').spawn;

gulp.task('clean-dist', function () {
  return gulp.src('dist/', { read: false })
    .pipe(clean());
});

// Do the Dojo build via node
gulp.task('dojo', ['clean-dist'], function (cb) {
  var cmd = spawn('node', [
    'src/dojo/dojo.js',
    'load=build',
    '--profile',
    'build.profile.js',
    '--releaseDir',
    '../dist'
  ], { stdio: 'inherit' });

  return cmd.on('close', function (code) {
    console.log('Dojo build completed ' + (code === 0 ? 'successfully!' : 'with issues.'));
    cb(code);
  });
});

// Dojo outputs uncompresssed files.
// Remove these for a release build.
gulp.task('clean-uncompressed', ['dojo'], function () {
  return gulp.src('dist/**/*.uncompressed.js', { read: false })
    .pipe(clean());
});

// Copy an html file configured for release build
gulp.task('copy', ['clean-uncompressed'], function () {
  return gulp.src('src/built.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['copy']);

gulp.task('default', ['build']);
