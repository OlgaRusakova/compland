"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const csso = require('gulp-csso');
const autoprefixer  = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const include = require('gulp-include');

gulp.task("sass", function () {
  return gulp
    .src("./src/assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(autoprefixer({
      cascade: false
  }))
    .pipe(gcmq())
    .pipe(csso())
    .pipe(rename({suffix:'.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("./src/assets/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
    // notify: false,
    // tunnel: true,
  });
});

/* gulp.task("js", function () {
  return gulp.src('./src/assets/js/index.js')
    .pipe(include())
      .on('error', console.log)
      // 
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/assets/js'))
    .pipe(browserSync.reload({ stream: true }));
});
 */

gulp.task("js", function () {
  
	return gulp
  .src(['./src/assets/js/*.js', '!./src/assets/js/*.min.js'])
		.pipe(webpack({
			mode: 'production',
			performance: { hints: false },
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/env'],
							plugins: ['babel-plugin-root-import']
						}
					}
				]
			}
		})).on('error', function handleError() {
			this.emit('end')
		})
		.pipe(rename('index.min.js'))
		.pipe(gulp.dest('./src/assets/js'))
		.pipe(browserSync.reload({ stream: true }));
});



gulp.task("checkupdate", function () {
  gulp.watch("./src/assets/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("./src/*.html").on('change', browserSync.reload);
  gulp.watch("./src/assets/js/**/index.js", gulp.parallel("js"));
});



gulp.task("watch", gulp.parallel("sass", "checkupdate", "browser-sync",));
