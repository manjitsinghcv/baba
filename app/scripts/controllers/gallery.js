'use strict';

/**
 * @ngdoc function
 * @name babaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the babaApp
 */
angular.module('babaApp')
  .controller('ParaControl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.countries=[
	{name:'India',continent:'Asia',currency:'Rupee'},
	{name:'Germany',continent:'Europe',currency:'Euro'},
	{name:'USA',continent:'America',currency:'Doller'},
	{name:'Kenya',continent:'Africa',currency:'shilling'}];
	  });

  
