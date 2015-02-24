'use strict';

/**
 * @ngdoc function
 * @name s3ChallengeApp.controller:ActivityctrlCtrl
 * @description
 * # ActivityctrlCtrl
 * Controller of the s3ChallengeApp
 */
 angular.module('s3ChallengeApp')
 .controller('ActivityCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
 	$scope.id = $routeParams.id;
 	$scope.activity = null;

 	$scope.Math = window.Math;

 	$http.get('/srv/id/' + $scope.id).success(function(data){
 		if (data.length > 0) {
 			$scope.activity = data[0];
 		} else {
 			$scope.activity = null;
 		}
 	});

 	$scope.back = function() {
 		$location.url('/');
 	};
 }]);
