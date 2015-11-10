import del from 'del';

export default function(config, gulp) {
	gulp.task('clean', (done) => {
		return del([ config.buildPath ])
			.then(() => done);
	});
}
