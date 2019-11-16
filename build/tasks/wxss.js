const gulp=require("gulp");
const sass=require("gulp-sass");
const rename = require('gulp-rename');

module.exports = function(){
	return gulp.src('./demo/miniprogram/**/*.wxss')
	.pipe(sass())
	.pipe(rename(function (path) {
        //path.basename += '.min';
        path.extname = '.wxss';
    }))
	.pipe(gulp.dest('./dist'));
}