'use strict';

/**
 * @ngdoc overview
 * @name s3ChallengeApp
 * @description
 * # s3ChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('s3ChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
