import angular from 'angular';
import ButtonController from './button.controller';
import ButtonComponent from './button.component';

export default angular.module('myapp.common.button', [])

.controller('ButtonController', ButtonController)
.directive('myButton', ButtonComponent);
