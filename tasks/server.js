import serve from 'browser-sync';

const browserSyncInit = (baseDir, files, browser = 'default') => {
	return () => {
		serve.instance = serve.init(files, {
			port: process.env.PORT || 3000,
			server: { baseDir },
			open: 'local',
			browser: browser,
			https: false
		});

		return serve.instance;
	};
};

export default function(config, gulp) {
	const { buildPath } = config;

	gulp.task('serve', ['build:development'], browserSyncInit(buildPath));

	gulp.task('serve:build', ['build:production'], browserSyncInit(buildPath));
}
