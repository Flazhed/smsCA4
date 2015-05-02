/**
 * Created by Morten on 02/05/15.
 */
describe("Testing Routes", function () {

    describe("Perform Search", function () {

        var scope, location, route;

        beforeEach(module('CA4App'));

        beforeEach(inject(function($route, $location, $rootScope, $httpBackend) {
                $httpBackend.expectGET("app/task1/task1.html").respond("");
                scope = $rootScope;
                location = $location;
                route = $route;
            })
            );


        it('should give the given controller and html, from the path url', function () {

            expect(route.current).toBeUndefined();
            location.path('/task1');
            scope.$digest();

            expect(route.current.templateUrl).toBe('app/task1/task1.html');
            expect(route.current.controller).toBe("Task1Controller");


        });

        it("should redirect to /task1 if an unknown path is given", function () {

            location.path('/UnknownPATH');
            scope.$digest();

            expect(location.path()).toBe('/task1');
            expect(route.current.templateUrl).toEqual('app/task1/task1.html');
            expect(route.current.controller).toBe("Task1Controller");

        });

    });


});