'use strict';

/**
 * @ngdoc filter
 * @name s3ChallengeApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the s3ChallengeApp.
 */
 angular.module('s3ChallengeApp')
 .filter('startFrom', function () {
 	return function (input, start) {
 		start = +start;
 		return input.slice(start);
 	};
 });
