describe('Button', () => {
	let $rootScope;
	let $compile;
	let element;
	let scope;

	// beforeEach(angular.mock.module('myapp.common'));

	beforeEach(inject((_$rootScope_, _$compile_) => {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	beforeEach(() => {
		scope = $rootScope.$new();
		element = $compile('<my-button onSecondClick="function() {}" />')(scope);
	});

	describe('Directive', () => {
		it('should exist', () => {
			expect(element).toBeDefined();
		});

		it('should have scope defined', () => {
			expect(scope).toBeDefined();
		});
	});
});
