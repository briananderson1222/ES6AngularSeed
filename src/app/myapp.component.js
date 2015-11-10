import template from './myapp.html';
import './myapp.scss';

function MyAppComponent() {
	'ngInject';

	return {
		template: template,
		restrict: 'E'
	};
}

export default MyAppComponent;
