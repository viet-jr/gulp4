module.exports = function () {
	$.gulp.task('sass', function () {
	return $.gulp.src('src/scss/main.scss')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass({
		}))
		.pipe($.gp.autoprefixer({
			browsers: ['last 2 versions']
		}))
		.on("error", $.gp.notify.onError({
		  title: "style"
		}))
		.pipe($.gp.csso({}))
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/css/'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});

	$.gulp.task('sass:dev', function () {
	return $.gulp.src('src/scss/main.scss')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass({
		}))
		.on("error", $.gp.notify.onError({
		  title: "style"
		}))
		.pipe($.gp.sourcemaps.write())
		.pipe($.gp.concat('style.css'))
		.pipe($.gulp.dest('build/css/'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});

/*	$.gulp.task('normalise', function () {
	return $.gulp.src(['node_modules/normalize.css/normalize.css'])
		.pipe($.gulp.dest('build/css/'))
	});*/
}