import { Server } from 'karma';
import path from 'path';

export default (config, gulp) => {
	gulp.task('test', () => {
		new Server({
			configFile: path.resolve('config/karma.js'),
			singleRun: true
		}).start();
	});

	gulp.task('test:tdd', () => {
		new Server({
			autoWatch: true,
			configFile: path.resolve('config/karma.js')
		}).start();
	});
};
