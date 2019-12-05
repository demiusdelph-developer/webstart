const {src,dest,watch} = require('gulp'),
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass');

  // function minifyCSS() {
  //   return src(['css/*.css', '!css/*.min.css'])
  //     .pipe(cleanCSS({compatibility: 'ie8'}))
  //     .pipe(rename({
  //       suffix: '.min',
  //       prefix: ''
  //     }))
  //     .pipe(dest('css'));
  // }

  function bs(){
    serveSass();
    browserSync.init({
      server: {
        baseDir: './'
      }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./*.js").on('change', browserSync.reload);
  }

  function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(rename({
          suffix: '.min',
          prefix: ''
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('./css'))
        .pipe(browserSync.stream());
}

exports.serve = bs;