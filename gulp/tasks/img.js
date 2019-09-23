module.exports = function () {
	$.gulp.task('img:dev', function () {
	return $.gulp.src('src/img/**/*.{png,jpg,gif,svg}')
		.pipe($.gulp.dest('build/img/'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});

	$.gulp.task('img:build', function () {
	return $.gulp.src('src/img/*.{png,jpg,gif,svg}')
		.pipe($.gp.tingpng('API_KEY'))
		.pipe($.gulp.dest('build/img/'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});
}