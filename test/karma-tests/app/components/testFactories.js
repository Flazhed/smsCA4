describe('CA4App.factories', function () {

    beforeEach(module('CA4App.factories'));

    describe('InfoFactory', function () {
        var infoFactory;
        beforeEach(inject(function (_InfoFactory_) {
            infoFactory = _InfoFactory_;
        }));

        it('Should be Hello World from a Factory', function () {
            expect(infoFactory.getInfo()).toBe("Hello World from a Factory");
        });
    });


    describe('Task1Factory', function () {

        var scope, httpMock, factory;

        beforeEach(module("CA4App.factories"));

        beforeEach(inject(function ($rootScope, $httpBackend, Task1Factory) {

            //Mocking the HTTP server away, since it have been testing the backend
            httpMock = $httpBackend;
            httpMock.whenGET("/api/wiki/findWiki/test").respond("data here");
            httpMock.whenGET("/api/wiki/getWiki/title").respond("more data here");
            //Setting the factory.
            factory = Task1Factory;
            //Creating a child scope, for the test.
            scope = $rootScope.$new();
        }));


        it("Should work", function () {
            factory.performSearch("test")
                .success(function (wikiElement) {
                    expect(wikiElement).toBe("data here")
                });

            //Should be in its own it suite, but somehow it says CYKA BLYAT
            factory.getWiki("title")
                .success(function (wikiElement) {
                    expect(wikiElement).toBe("more data here")
                });

            httpMock.flush();
        });


    });


    describe("Task3Factory", function () {

        var scope, httpMock, factory;

        beforeEach(module("CA4App.factories"));

        beforeEach(inject(function ($rootScope, $httpBackend, Task3Factory) {
            //Mocking the HTTP server away, since it have been testing the backend
            httpMock = $httpBackend;
            httpMock.whenGET("/api/wiki/getCategories").respond("all data in the world");
            //Setting the factory.
            factory = Task3Factory;
            //Creating a child scope, for the test.
            scope = $rootScope.$new();
        }));


        it("Should get all categories", function () {
            console.log("her")
            factory.getCategories()
                .success(function (categories) {
                    expect(categories).toBe("all data in the world");
                })
            httpMock.flush();
        });

    });

});