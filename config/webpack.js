import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

const config = {
	dev: {
		debug: true,
		devtool: '#sourcemap',
		stats: { children: false },
		output: {
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{ test: /\.js$/, exclude: [/node_modules/], loaders: ['ng-annotate', 'babel-loader'] },
				{ test: /\.html$/, loader: 'raw' },
				{
					test: /\.(css|scss)$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
				}
			]
		},
		postcss: () => {
			return [
				autoprefixer,
				precss
			];
		},
		plugins: [
			new ExtractTextPlugin('bundle.css')
		]
	},
	prod: {
		stats: { children: false },
		output: {
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{ test: /\.js$/, exclude: [/node_modules/], loaders: ['ng-annotate', 'babel-loader'] },
				{ test: /\.html$/, loader: 'raw' },
				{
					test: /\.(css|scss)$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
				}
			]
		},
		postcss: () => {
			return [
				autoprefixer,
				precss
			];
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				mangle: false,
				compress: {
					warnings: false
				}
			}),
			new ExtractTextPlugin('bundle.css')
		]
	}
};

module.exports = config;
