'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	del: require('del'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('html', 'sass:dev', 'scripts:lib', 'scripts:dev', 'fonts', 'img:dev'),
	$.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
	$.gulp.parallel('html', 'sass', 'scripts:lib', 'scripts:dev', 'fonts', 'img:build'),
	$.gulp.parallel('watch', 'serve')
));