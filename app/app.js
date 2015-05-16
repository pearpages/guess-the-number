angular.module('app',[])
	.controller('myController',['$scope',function ($scope){

	$scope.verifyGuess = function (){
		$scope.deviation = $scope.original - $scope.guess;
		$scope.noOftries = $scope.noOftries +1;
	}
	$scope.initializeGame = function (){
		$scope.noOftries = 0;
		$scope.original = Math.floor((Math.random() * 1000) + 1);
		$scope.guess = null;
		$scope.deviation = null;
	}
	$scope.initializeGame();
}]);
