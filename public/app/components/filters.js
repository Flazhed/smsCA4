'use strict';

/* Filters */

angular.module('CA4App.filters', []).
  filter('checkmark', function () {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
