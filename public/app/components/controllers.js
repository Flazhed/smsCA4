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

        $scope.title = "Task 1"

    }])
    .controller("Task1ControllerDetails", ["$scope", "$routeParams", "Task1Factory", function ($scope, $routeParams, Task1Factory) {

        var title = $routeParams.title;

        Task1Factory.getWiki(title)
            .success(function (data) {
                $scope.wikiDetails = data;
            }).error(function (err) {
                console.log(err);
            });
    }])
    .controller("Task4Controller", ['$scope', '$log', 'Task1Factory', function ($scope, $log, Task1Factory) {

        var dataArr = [];


        $scope.searchField;
        $scope.performSearch = function () {
            Task1Factory.performSearch($scope.searchField)
                .success(function (data) {
                    dataArr = data;
                    $scope.result = data;
                    $scope.totalItems = dataArr.length;
                    console.log(dataArr.length);

                    $scope.currentPage = 1;
                    $scope.numPerPage = 10;
                    $scope.maxSize = 5;

                    $scope.setPage = function (pageNo) {
                        $scope.currentPage = pageNo;
                    };


                    $scope.numPages = dataArr.length;


                    $scope.$watch('currentPage + numPerPage', function () {
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                            , end = begin + $scope.numPerPage;

                        $scope.filtedData = dataArr.slice(begin, end);
                    });

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


    }]);



