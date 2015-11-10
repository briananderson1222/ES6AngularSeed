const PROD_ENV = process.env.NODE_ENV === 'production';

export default function(config, gulp) {
	require('./clean')(config, gulp);
	require('./test')(config, gulp);
	require('./build')(config, gulp);

	if (!PROD_ENV) {
		require('./watch')(config, gulp);
		require('./server')(config, gulp);
	}
}
