angular.module('CA4App.controllers', []).
    controller('AppCtrl', function ($scope) {
        $scope.title = "Demo Angular, Express and MongoDb";
    })
    .controller('MyCtrl2', function ($scope) {
        // write MyCtrl2 here
    })
    .controller('Task1Controller', ['$scope', 'Task1Factory', function ($scope, Task1Factory) {

        $scope.searchField;
        $scope.performSearch = function () {
            Task1Factory.performSearch($scope.searchField)
                .success(function (data) {
                    $scope.result = data;

                })
                .error(function (error) {
                    $scope.status = "Error error " + error.message;
                })

        }

        $scope.loadAcordion = function (result) {

            if (!result.content) {
                Task1Factory.getWiki(result.title)
                    .success(function (data) {
                        result.content = data;
                    })
                    .error(function (error) {
                        result.status = "Error in loadAcordion " + error.message;
                    })
            }
        }

    }])
    .controller("Task1ControllerDetails", ["$scope", "$routeParams", "Task1Factory", function ($scope, $routeParams, Task1Factory) {

        var title = $routeParams.title;

        Task1Factory.getWiki(title)
            .success(function (data) {
                $scope.wikiDetails = data;
            }).error(function (err) {
                console.log(err);
            });
    }]);



