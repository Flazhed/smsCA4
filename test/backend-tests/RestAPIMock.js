/**
 * Created by Morten on 28/04/15.
 */
var _nock = require('nock');
var should = require("should");
var request = require('request');

var data = require('./wikiList');

var baseUrl = "http://localhost:3000/api";

describe("RestAPI Mock", function () {

    describe("Testing getCategories", function () {

        beforeEach(function (done) {
            var nock = _nock(baseUrl)
                .get("/wiki/getCategories")
                .reply(200, data);
            done();
        });

        it("should get all categories, from wiki/getCategories", function (done) {

            request.get(baseUrl + "/wiki/getCategories", function (err, res, body) {
                var result = JSON.parse(body).wikiArray.length;
                result.should.equal(4);
                done();

            })

        })


    });

    describe("Testing getWiki/:title", function () {

        var JavaObj = {title: "Java", abstract: "JavaScript is Java in coke"};

        beforeEach(function (done) {
            var nock = _nock(baseUrl)
                .get("/wiki/getWiki/Java")
                .reply(200, JavaObj);
            done();
        });

        it("should return one object matched on title", function (done) {

            request.get(baseUrl + "/wiki/getWiki/Java", function (err, res, body) {
                var result = JSON.parse(body);
                result.title.should.eql("Java");
                result.should.eql(JavaObj);
                done()

            })

        });


    });

    describe("Testing getWiki/:title", function () {

        var JavaArr = [{title: "Java", abstract: "JavaScript is Java in coke"}, {
            title: "Java++",
            abstract: "Java on crack-cocaine"
        }];

        beforeEach(function (done) {
            var nock = _nock(baseUrl)
                .get("/wiki/getWiki/Java")
                .reply(200, JavaArr);
            done();
        });

        it("should return an array of object matched on abstract and title", function (done) {

            request.get(baseUrl + "/wiki/getWiki/Java", function (err, res, body) {
                var result = JSON.parse(body);
                result.should.have.length(2);
                result[0].abstract.should.eql("JavaScript is Java in coke");
                result[1].title.should.eql("Java++")
                done();
            })

        });


    });

    describe("Testing getCategories/:cat", function () {


        beforeEach(function (done) {
            var nock = _nock(baseUrl)
                .get("/wiki/getCategories/Java")
                .reply(200, [1, 2, 3, 4]);
            done();
        });

        it("should get all categories matched on the search", function (done) {

            request.get(baseUrl + "/wiki/getCategories/Java", function (err, res, body) {
                var result = JSON.parse(body).length;
                result.should.equal(4);
                done();

            });

        });

    });

});