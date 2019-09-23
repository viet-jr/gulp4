module.exports = function () {
	$.gulp.task('watch', function () {
	$.gulp.watch('src/scss/**/*scss', $.gulp.series('sass:dev'));
	$.gulp.watch('src/js/**/*js', $.gulp.series('scripts:dev'));
	$.gulp.watch('src/img/**/*.{png,jpg,gif,svg}', $.gulp.series('img:dev'));
	$.gulp.watch('src/fonts/**/*', $.gulp.series('fonts'));
	$.gulp.watch('src/**/*html', $.gulp.series('html'));
	$.gulp.watch("./build/**/*.html").on('change', $.browserSync.reload);
});
}