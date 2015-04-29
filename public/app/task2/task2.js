'use strict';

var app = angular.module('CA4App.task2', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/task2', {
        templateUrl : 'app/task2/task2.html',
        controller : 'Task1Controller'
    })

}])