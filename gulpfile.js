'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso'); // Minify CSS
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass:main', function () {
	return gulp.src('./css/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ cascade: false })) // add vendor prefixes
		.pipe(csso()) // Minify CSS
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch('./css/*.scss', gulp.series('sass:main'));
});
