'use strict';

/**
 * @ngdoc function
 * @name s3ChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the s3ChallengeApp
 */
 angular.module('s3ChallengeApp')
 .controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
 	$scope.activities = [];
 	$scope.itemPerPage = 12;
 	$scope.pageShown = 0;
 	$scope.pages = [];

 	$scope.openPage = function(page) {
 		$scope.pageShown = page;
 	};

 	$scope.openActivity = function(id) {
 		$location.url(id);
 	};

 	$http.get('/srv/').success(function(data) {
 		$scope.activities = data;
 		var tempPages = [];
 		for (var i = 0; i < Math.ceil(data.length / $scope.itemPerPage); i++) {
 			tempPages.push(i);
 		}
 		$scope.pages = tempPages;
 	}).error(function() {

 	});
 }]);
