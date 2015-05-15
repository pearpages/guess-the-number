'use strict';

/**
 * @ngdoc function
 * @name guessTheNumberApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guessTheNumberApp
 */
angular.module('guessTheNumberApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
