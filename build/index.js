const gulp=require("gulp");
const program = require('commander');
const moment = require('moment');

const wxssTask = require('./tasks/wxss');
const tsTask = require('./tasks/ts');
const jsonTask = require('./tasks/json');
const wxmlTask = require('./tasks/wxml');

const dateFormat = 'YYYY-MM-DDDD HH:mm:SS';



program
    .version('0.0.1')
    .option('-w, --watch', 'watch')
    .parse(process.argv);

// console.log(process.env.APPLICATION);
// console.log(process.env.NODE_ENV);
// console.log(program.debug);


function build(){
	const tasks = [wxssTask,tsTask,jsonTask,wxmlTask];
	console.log(`${moment().format(dateFormat)}开始构建...`);
	tasks.forEach(task=>{
		task();
	});	
	console.log(`${moment().format(dateFormat)}构建结束...`);
}

build();
if(program.watch){

	gulp.watch('./demo/miniprogram/**/*.*', build);

}



//gulp.watch("./demo/miniprogram/pages/index/index.wxss",gulp.series('sass'));
//gulp.parallel([wxssTask,tsTask,jsonTask,wxmlTask])
//wxssTask();
//tsTask();




