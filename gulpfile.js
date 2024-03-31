const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/styles/'));
}

function compressImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./src/images/**/*', { ignoreInitial: false }, gulp.series(compressImages));
};