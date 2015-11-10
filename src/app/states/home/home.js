import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';

export default angular.module('myapp.home', [
	uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: '<myapp-home></myapp-home>'
		});
})

.directive('myappHome', HomeComponent);
