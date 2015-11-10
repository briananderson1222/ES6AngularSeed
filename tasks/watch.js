import browserSync from 'browser-sync';

export default function(config, gulp) {
	const { paths } = config;

	gulp.task('watch', () => {
		const allPaths = [].concat([paths.js], [paths.html], [paths.css]);
		gulp.watch(allPaths, ['lint', 'webpack', browserSync.reload]);
	});
}
