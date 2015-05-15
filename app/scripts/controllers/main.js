'use strict';

/**
 * @ngdoc function
 * @name guessTheNumberApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guessTheNumberApp
 */
angular.module('guessTheNumberApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
