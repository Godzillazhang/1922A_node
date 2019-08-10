const _gulp=require("gulp");
const _sass = require('gulp-sass');




_sass.compiler = require('node-sass');
_gulp.task('ass', function () {
    return _gulp.src('scss/*.scss')
        .pipe(_sass().on('error', _sass.logError))
        .pipe(_gulp.dest('css'));
});