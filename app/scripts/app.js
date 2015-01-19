'use strict';

/**
 * @ngdoc overview
 * @name babaApp
 * @description
 * # babaApp
 *
 * Main module of the application.
 */
angular
  .module('babaApp', [
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
	        .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	        .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
	  	        .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'ParaControl'
      })
	    .when('/joinus', {
        templateUrl: 'views/joinus.html',
        controller: 'JoinCtrl'
      })
	  
	  
	  
	  
      .otherwise({
        redirectTo: '/'
      });
  });
