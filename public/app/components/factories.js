'use strict';

/* Factories */

angular.module('CA4App.factories', []).
  factory('InfoFactory', function () {
    var info = "Hello World from a Factory";
    var getInfo = function getInfo(){
      return info;
    }
    return {
      getInfo: getInfo
    }
  })
  .factory('Task1Factory', ['$http', function($http){

        var task1Factory = {};


        task1Factory.performSearch = function(searchField){

            return $http.get('/api/wiki/findWiki/' + searchField)


        }

        task1Factory.getWiki = function(title){
            //return $http.get('/api/wiki/getWiki/' + title)
            console.log("test")
            return "hello brothers";
        }

        return task1Factory;

    }])