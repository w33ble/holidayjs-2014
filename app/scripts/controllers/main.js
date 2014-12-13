'use strict';

/**
 * @ngdoc function
 * @name holidayjs2014App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the holidayjs2014App
 */
angular.module('badsantaApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {

  	var fireRef = new Firebase(FBURL);

  	$scope.santaPics = $firebase(fireRef).$asArray();

  });
