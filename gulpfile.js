var gulp = require('gulp');
var uglifyCss = require('gulp-uglifycss');
var watch = require('gulp-watch');
var sass = require('gulp-sass');


gulp.task('sass', function () {
   gulp.src('./src/scss/*.scss')
  	.pipe(sass().on('error', sass.logError))
    .pipe(uglifyCss())
    .pipe(gulp.dest('./build/css/'))
    
})

gulp.task('default',function() {
	gulp.watch('./src/scss/*.scss',['sass']);
})


