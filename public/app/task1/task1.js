'use strict';

var app = angular.module('CA4App.task1', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/task1', {
        templateUrl : 'app/task1/task1.html',
        controller : 'Task1Controller'
    })

}])