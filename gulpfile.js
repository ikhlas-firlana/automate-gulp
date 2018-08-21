const gulp = require('gulp');
const util = require('util');
const argv = require('yargs').argv;
gulp.task('hello', () => {
	console.log("hello world!");
	console.log("listen to "+ JSON.stringify(argv));
	if (!util.isUndefined(argv['place'])){
		gulp.watch(argv['place'], () => {
			console.log("it will do something");
		});
	}
});
