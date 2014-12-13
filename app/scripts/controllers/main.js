'use strict';

/**
 * @ngdoc function
 * @name holidayjs2014App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the holidayjs2014App
 */
angular.module('badsantaApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.santa1 = {name:'1st',imageUrl:'http://placekitten.com/g/200/300',active:false};
  	$scope.santa2 = {name:'2nd',imageUrl:'http://placekitten.com/g/200/300',active:false};
  	$scope.santa3 = {name:'3rd',imageUrl:'http://placekitten.com/g/200/300',active:false};
  	$scope.santa4 = {name:'4th',imageUrl:'http://placekitten.com/g/200/300',active:false};
  	$scope.santa5 = {name:'5th',imageUrl:'http://placekitten.com/g/200/300',active:false};

    $scope.onClickSanta = function(santaPic, bg)
    {
    	santaPic.active = !santaPic.active;

    	if(santaPic.active)
    	{
    		bg = {background:'url(' + santaPic.imageUrl + ')'};
    	}
    	else 
    	{
    		bg = {};
    	}
    }
  });
