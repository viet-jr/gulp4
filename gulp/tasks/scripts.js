module.exports = function () {
	$.gulp.task('scripts:lib', function () {
	return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
		'node_modules/slick-carousel/slick/slick.min.js'])
		.pipe($.gp.concat('libs.min.js'))
		.pipe($.gulp.dest('build/js/'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});

	$.gulp.task('scripts:dev', function () {
	return $.gulp.src('src/js/main.js')
		// .pipe($.gp.concat('main.js'))
		.pipe($.gulp.dest('build/js/'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});
}