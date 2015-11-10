import template from './button.html';
import controller from './button.controller';
import './button.scss';

function Button() {
	'ngInject';

	return {
		restrict: 'E',
		scope: {},
		template,
		controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

export default Button;
