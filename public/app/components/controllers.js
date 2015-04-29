angular.module('CA4App.controllers', []).
  controller('AppCtrl', function ($scope) {
    $scope.title = "Demo Angular, Express and MongoDb";
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  })
  .controller('Task1Controller', ['$scope','Task1Factory' , function($scope, Task1Factory){

        $scope.searchField;
        $scope.performSearch = function(){
            Task1Factory.performSearch($scope.searchField)
                .success(function(data){
                    $scope.result = data;

                })
                .error(function(error){
                    $scope.status = "Error error " + error.message;
                })

        }

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.oneAtATime = true;


        $scope.groups = [

        ]

    }])



