var should = require('should');
var mongoose = require('mongoose');

//Global test variable, will be set in the ../model/db.js
global.TEST_DATABASE = "mongodb://localhost/TestDBWiki";

//Make sure we use the test DB instead of the other
require("../model/db");

var _wikis = mongoose.model('Wikis');

var wikiArray = require('./wikiList');

var wikiFacade = //require wikifacade

describe("Testing of the Wiki Facade", function(){

    //Cleanup the database and add elements from local file before each test
    beforeEach(function(done){

        //Remove from DB
        _wikis.remove({}, function(){done()})

        //Add all elements from the local file
        wikiArray.forEach(function(elem){
            elem = new _wikis(elem);
            elem.save(function(err, newQuote){
                if(err) return console.error(err);
            })
        })

    })

    it("getWiki - Test that the facade returns a wiki object on a given title", function(done){

        var randomLocalWiki = _wikis[Math.floor(Math.random() * _wikis.length-1)]


    })

    it("findWiki - Should return a list of titles and abstracts of wiki objects that matches the search", function(done){




    })

    it("getCategories - Should return a list of all distinct categories", function(done){




    })


    it("getWikisWithCategory - Should return a list of title and abstract for wiki objects that matches the given category", function(done){




    })

})