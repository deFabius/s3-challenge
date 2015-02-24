'use strict';

/**
 * @ngdoc filter
 * @name s3ChallengeApp.filter:mToKm
 * @function
 * @description
 * # mToKm
 * Filter in the s3ChallengeApp.
 */
angular.module('s3ChallengeApp')
  .filter('mToKm', function () {
    return function (input) {
      return Math.ceil(input / 1000) / 100;
    };
  });
