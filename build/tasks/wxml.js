const gulp=require("gulp");

module.exports = function(){
	return gulp.src('./demo/miniprogram/**/*.wxml')
	.pipe(gulp.dest('./dist'));
}