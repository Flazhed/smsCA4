'use strict';

/* Filters */

angular.module('CA4App.filters', []).
  filter('checkmark', function () {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  })
    .filter('task3Filter', function () {
      return function (input, letter) {

        input = input || [];

        var out = [];
        input.forEach(function (item) {
          if(item != null){
            // The "*" sign is used as a wildcard to pass anything through the filter
          if(item.charAt(0).toLowerCase() == letter || letter === "*"){
            out.push(item);
          }}

        })
        return out;

      }
    });
