const gulp=require("gulp");
const program = require('commander');

const wxssTask = require('./tasks/wxss');
const tsTask = require('./tasks/ts');


//var fs = require("fs")

// program
//     .version('0.0.1')
//     .option('-d, --debug [debug]', 'Debug build')
//     .parse(process.argv);

// console.log(process.env.APPLICATION);
// console.log(process.env.NODE_ENV);
// console.log(program.debug);


// fs.readFile('./demo/miniprogram/pages/index/index.wxss', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });





//gulp.watch("./demo/miniprogram/pages/index/index.wxss",gulp.series('sass'));
wxssTask();
tsTask();

gulp.src(['./demo/miniprogram/**/*.json','./demo/miniprogram/**/*.wxml']).pipe(gulp.dest('./dist'));



