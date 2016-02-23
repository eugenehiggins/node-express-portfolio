var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src(__dirname + '/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(__dirname + '/src/public/css/'))
});

//Watch task
gulp.task('default',function() {
    //console.log(__dirname)
    gulp.watch(__dirname + '/src/sass/**/*.scss',['styles']);
});