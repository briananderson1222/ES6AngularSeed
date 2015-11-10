import angular from 'angular';
import Environment from './environment/environment';
import Button from './button/button';

export default angular.module('myapp.common', [
	Environment.name,
	Button.name
]);
