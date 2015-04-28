/**
 * Created by Nitro Jan on 4/28/15.
 */

var db = require('./db');
var mongoose = require('mongoose');
var wiki = mongoose.model('Wiki');

function _getWiki(title, callback){

    wiki.find({title : title }, function (err, result) {
        if(err){
            callback(err);
        }
        else{
            callback(null, JSON.stringify(result));
        }
    })
}

function _findWiki(searchString, callback){

        wiki.find({$or:[{title : new RegExp(searchString, 'i')}, {abstract :  new RegExp(searchString, 'i')}]}, 'title abstract', function (err, result) {
            if(err){
                callback(err);
            }
            else{
                callback(null, JSON.stringify(result));
            }
        })
}

function _getCategories(callback){

    wiki.find().distinct('categories', function (err, result) {
        if(err){
            callback(err);
        }
        else{
            callback(null, JSON.stringify(result));
        }

    })
}

function _getWikiWithCategory(category, callback){

    wiki.find({categories : category}, 'title abstract' ,  function (err, result) {

        if(err){
            callback(err);
        }
        else{
            callback(null, JSON.stringify(result));
        }
    })
}


//_findWiki("java", function (err, result) {
//    console.log(JSON.parse(result).length);
//})

//_getCategories(function(err, result){
//    console.log(result)
//})

//_getWikiWithCategory("1970 births", function(err, result){
//    console.log(result)
//})

module.exports = {
    getWiki : _getWiki,
    findWiki : _findWiki,
    getCategories : _getCategories,
    getWikiWithCategory : _getWikiWithCategory
}