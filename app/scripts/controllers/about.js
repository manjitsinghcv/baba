'use strict';

/**
 * @ngdoc function
 * @name babaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the babaApp
 */
angular.module('babaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
