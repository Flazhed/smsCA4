'use strict';

angular.module('myAppRename.view1', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/index.html',
    controller: 'TooltipDemoCtrl'
  });
}])

.controller('TooltipDemoCtrl', function ($scope) {
        $scope.dynamicTooltip = 'Hello, World!';
        $scope.dynamicTooltipText = 'dynamic';
        $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
    });