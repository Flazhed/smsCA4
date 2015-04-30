/**
 * Created by MS on 30-04-2015.
 */
var app = angular.module("CA4App.task4", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/task4", {
        templateUrl: "./task4/task4.html",
        controller: "Task4Controller"
    });

}]);