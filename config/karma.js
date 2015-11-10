module.exports = function(config) {
	config.set({
		// base path used to resolve all patterns
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine-jquery', 'jasmine'],

		// list of files/patterns to load in the browser
		files: [
			'../node_modules/phantomjs-polyfill/bind-polyfill.js',
			{ pattern: '../spec.bundle.js', watched: false }
		],

		// files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: { '../spec.bundle.js': ['webpack', 'sourcemap'] },

		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{ test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
					{ test: /\.html$/, loader: 'raw' },
					{ test: /\.scss$/, loader: 'style!css!postcss' }
				]
			}
		},

		webpackServer: {
			noInfo: true // prevent console spamming when running in Karma!
		},

		// web server port
		port: 9876,

		// enable colors in the output
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// toggle whether to watch files and rerun tests upon incurring changes
		autoWatch: false,

		// reporting
		reporters: ['spec'],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS']

	});
};
