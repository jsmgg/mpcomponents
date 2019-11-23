const gulp=require("gulp");

module.exports = function(){
	return gulp.src('./demo/miniprogram/**/*.json')
	.pipe(gulp.dest('./dist'));
}