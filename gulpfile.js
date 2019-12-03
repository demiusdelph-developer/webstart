var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync');

  gulp.task('minify-css', function() {
    return gulp.src(['css/*.css', '!css/*.min.css'])
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({
        suffix: '.min',
        prefix: ''
      }))
      .pipe(gulp.dest('css'));
  });

  gulp.task('browser-sync', function(){
    browserSync.init({
      server: {
        baseDir: './'
      }
    });
  });