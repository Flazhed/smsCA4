'use strict';

// Declare app level module which depends on views, and components
angular.module('CA4App', [
    'ngRoute',
    'ui.bootstrap',
    'CA4App.controllers',
    'CA4App.directives',
    'CA4App.services',
    'CA4App.factories',
    'CA4App.filters',
    'CA4App.task1',
    'CA4App.task2',
    'CA4App.task3',
    "CA4App.task4"
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/wikiDetails/:title", {
            templateUrl: "task1/task1Details.html",
            controller: "Task1ControllerDetails"
        });
        $routeProvider.otherwise({redirectTo: '/task1'});
    }]);
