import angular from 'angular';
import Environment from './environment.constant';

export default angular.module('myapp.common.env', [])

.constant('ENV', new Environment());
