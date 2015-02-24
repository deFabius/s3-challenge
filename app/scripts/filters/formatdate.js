'use strict';

/**
 * @ngdoc filter
 * @name s3ChallengeApp.filter:formatDate
 * @function
 * @description
 * # formatDate
 * Filter in the s3ChallengeApp.
 */
angular.module('s3ChallengeApp')
  .filter('formatDate', function () {
    return function (input, format) {
    	var date = new Date(input);
      return $.datepicker.formatDate( format, date );
    };
  });
