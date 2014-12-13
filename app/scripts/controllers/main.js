'use strict';

/**
 * @ngdoc function
 * @name badsantaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the badsantaApp
 */
angular.module('badsantaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
