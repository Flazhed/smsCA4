'use strict';


describe("Testing Controllers", function () {


    describe("Task1Controller", function () {
        var scope, controller;

        beforeEach(module("CA4App.controllers"));

        beforeEach(module({
            Task1Factory: {
                performSearch: function () {
                    return "performed Search!";
                },
                loadAcordion: function () {
                    return "loadedAcordion";
                }
            }
        }));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller("Task1Controller", {$scope: scope})
        }));

        it("should return a list of wikis, when given a searchString : fuction performSerch", function () {
            //The fuck do i fake .success ?.
            scope.searchField = "Java";
            //console.log(scope.result);
            //console.log(scope.title);
        });

    });


});