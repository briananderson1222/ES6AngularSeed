import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import States from './states/states';
import MyAppComponent from './myapp.component';

angular.module('myapp', [
	uiRouter,
	Common.name,
	States.name
])

.directive('myapp', MyAppComponent);
