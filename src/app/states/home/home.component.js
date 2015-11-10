import template from './home.html';
import controller from './home.controller';
import './home.scss';

function Home() {
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

export default Home;
