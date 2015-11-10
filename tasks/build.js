import webpack from 'webpack-stream';
import sync from 'run-sequence';
import eslint from 'gulp-eslint';
import rename from 'gulp-rename';
import { dev, prod } from '../config/webpack';

const PROD_ENV = process.env.NODE_ENV === 'production';

let webpackConfig = dev;

export default function(config, gulp) {
	const { paths } = config;

	if (PROD_ENV) {
		webpackConfig = prod;
	}

	// use webpack.config.js to build modules
	gulp.task('webpack', () => {
		return gulp.src(paths.entry)
			.pipe(webpack(webpackConfig))
			.pipe(gulp.dest(paths.output));
	});

	gulp.task('html', () => {
		return gulp.src('src/*.html')
			.pipe(gulp.dest(config.buildPath));
	});

	gulp.task('static', () => {
		return gulp.src('src/assets/**/*')
			.pipe(gulp.dest(paths.output + '/assets'));
	});

	gulp.task('config', () => {
		return gulp.src('config/app.js')
			.pipe(rename('config.js'))
			.pipe(gulp.dest(paths.output));
	});

	gulp.task('lint', () => {
		return gulp.src(paths.js)
			.pipe(eslint({
				useEslintrc: true,
				configFile: './.eslintrc'
			}))
			.pipe(eslint.format());
	});

	gulp.task('build:development', (done) => {
		sync(['clean'],
			 ['static', 'config', 'html', 'lint'],
			 ['webpack'],
			 'watch',
			 done);
	});

	gulp.task('build:production', (done) => {
		sync(['clean'],
			 ['static', 'config', 'html'],
			 ['webpack'],
			 done);
	});

	gulp.task('default', (done) => {
		sync('serve', done);
	});
}
