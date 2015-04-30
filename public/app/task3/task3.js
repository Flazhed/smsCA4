'use strict';

var app = angular.module('CA4App.task3', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/task3', {
        templateUrl : 'app/task3/task3.html',
        controller : 'Task3Controller'
    })

    $routeProvider.when("/categoryTitles/:category", {
        templateUrl: "task3/task3Titles.html",
        controller: "Task3Controller"
    });
}])
