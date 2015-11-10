import path from 'path';

const buildPath = 'build';
const srcPath = 'src';

// helper method for resolving paths
const resolvePath = (dir = 'app', glob = '') => {
	return path.join(srcPath, dir, glob);
};

const config = {
	buildPath: buildPath,
	srcPath: srcPath,
	paths: {
		js: [
			resolvePath('app/components/', '**/!(*.spec).js'),
			resolvePath('app/states/', '**/!(*.spec).js'),
			resolvePath('app/', '**/!(*.spec).js')
		], // exclude spec files
		css: resolvePath('app', '**/*.scss'), // stylesheets
		html: [
			resolvePath('app', '**/*.html'),
			path.join(srcPath, 'index.html')
		],
		entry: path.join(srcPath, 'app/myapp.module.js'),
		output: buildPath
	}
};

export default config;
