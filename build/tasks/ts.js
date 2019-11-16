const gulp=require("gulp");
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./demo/tsconfig.json');

module.exports = function(){
	return tsProject.src()
	.pipe(tsProject())
	.pipe(gulp.dest('./dist'));
}