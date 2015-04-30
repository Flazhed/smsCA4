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

        //Stores the result, from the database
        $scope.result = [];
        //Hides the pagination
        $scope.checked = true;
        //size of the pagination
        $scope.maxSize = 10;
        //amount of items pr "page"
        $scope.itemPage = 30;
        //sets the start "page"
        $scope.bigCurrentPage = 1;

        //Sets the currentPage value when a page is changed
        $scope.setPage = function (pageNo) {
            $scope.bigCurrentPage = pageNo;
        };

        //Filters the array, when a page is changed.
        $scope.pageChanged = function () {
            //$log.log('Page changed to: ' + $scope.bigCurrentPage);
            var begin = (($scope.bigCurrentPage - 1) * $scope.itemPage)
                , end = begin + $scope.itemPage;

            $scope.filtedData = $scope.result.slice(begin, end);
        };

        //HTTP get stuff
        $scope.searchField;

        $scope.performSearch = function () {
            Task1Factory.performSearch($scope.searchField)
                .success(function (data) {
                    $scope.bigCurrentPage = 1;
                    $scope.checked = false;
                    $scope.result = data;

                    //sets the amount of items in the pagination.
                    $scope.bigTotalItems = data.length;
                    //Called to setup of the list for the first time.
                    $scope.pageChanged();

                })
                .error(function (error) {
                    $scope.status = "Error error " + error.message;
                })

        };

    }]);



