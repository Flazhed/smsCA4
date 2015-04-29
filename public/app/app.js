'use strict';

// Declare app level module which depends on views, and components
angular.module('CA4App', [
  'ngRoute',
  'CA4App.controllers',
  'CA4App.directives',
  'CA4App.services',
  'CA4App.factories',
  'CA4App.filters',
  'CA4App.view1',
  'CA4App.view2',
  'CA4App.view3',
  'CA4App.task1',
  'CA4App.task2'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
