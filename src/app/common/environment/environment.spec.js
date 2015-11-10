import Environment from './environment.constant';

describe('Environment', () => {
	let ENV;

	it('should exist', () => {
		expect(Environment).toBeDefined();
	});

	it('should be a function', () => {
		expect(typeof Environment).toEqual('function');
	});

	describe('constructor', () => {
		describe('with external definitions explicitly set', () => {
			beforeEach(() => {
				window.MYAPP = {
					API_URI: 'http://fake.api.com',
					ENDPOINTS: {
						ENDPOINT: '/fake/endpoint'
					}
				};
				ENV = new Environment();
			});

			it('should have externally defined endpoint', () => {
				expect(ENV.endpoint).toEqual('/fake/endpoint');
			});

			it('should have externally defined API base', () => {
				expect(ENV.apiUri).toEqual('http://fake.api.com');
			});
		});
	});

	describe('.setProperty', () => {
		beforeEach(() => {
			window.MYAPP = { DOES_EXIST: 'some value' };
			ENV = new Environment();
		});

		it('should set the global if it exists', () => {
			expect(ENV.doesExist).not.toBeDefined();
			ENV.setProperty('doesExist', 'MYAPP.DOES_EXIST', 'defaultValue');
			expect(ENV.doesExist).toEqual('some value');
		});
	});
});
