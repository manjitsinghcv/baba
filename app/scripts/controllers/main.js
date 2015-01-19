'use strict';

/**
 * @ngdoc function
 * @name babaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the babaApp
 */
angular.module('babaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
