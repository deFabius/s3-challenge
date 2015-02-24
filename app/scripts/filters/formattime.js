'use strict';

/**
 * @ngdoc filter
 * @name s3ChallengeApp.filter:formatTime
 * @function
 * @description
 * # formatTime
 * Filter in the s3ChallengeApp.
 */
angular.module('s3ChallengeApp')
  .filter('formatTime', function () {
    return function (input) {
    	var date = new Date(input);
    	var m = date.getMinutes();
    	m = (m < 10) ? '0' + m : m;
    	var s = date.getSeconds();
    	s = (s < 10) ? '0' + s : s;

      return date.getHours() + ':' + m + ':' + s;
    };
  });
