var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
//var user = mongoose.model('User');

var wiki = require('../model/wikiFacade');

// Some random aids!
/* GET A User From The DataBase */
//router.get('/user', function (req, res) {
//    if (typeof global.mongo_error !== "undefined") {
//        res.status(500);
//        res.end("Error: " + global.mongo_error + " To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
//        return;
//    }
//    user.find({}, function (err, users) {
//        if (err) {
//            res.status(err.status || 400);
//            res.end(JSON.stringify({error: err.toString()}));
//            return;
//        }
//        res.header("Content-type", "application/json");
//        res.end(JSON.stringify(users));
//    });
//});

router.get('/wiki/getWiki/:title', function (req, res) {
    var title = req.params.title;

    wiki.getWiki(title, function (err, elem) {
        if (err) {
            return res.end(JSON.stringify({error: err.toString()}))
        }
        ;
        res.end(elem);
    })

});

router.get('/wiki/findWiki/:title', function (req, res) {
    var title = req.params.title;

    wiki.findWiki(title, function (err, elem) {
        if (err) {
            return res.end(JSON.stringify({error: err.toString()}))
        }

        res.end(elem);

    })

});

router.get('/wiki/getCategories', function (req, res) {

    wiki.getCategories(function (err, elem) {
        if (err) {
            return res.end(JSON.stringify({error: err.toString()}))
        }
        ;
        res.end(elem);
    })

});

router.get('/wiki/getCategories/:cat', function (req, res) {
    var category = req.params.cat;
    console.log(category);
    wiki.getWikiWithCategory(category, function (err, elem) {
        if (err) {
            return res.end(JSON.stringify({error: err.toString()}))
        }
        ;
        res.end(elem);
    });

});


module.exports = router;
