// Define the module
var myApp = angular.module('myApp', [])

// Create a controller that uses expressions
myApp.controller('ExpressionController', function ($scope) {
	// Define some scope variables
	$scope.a = 10
	$scope.b = 20

	// A function that returns the sum of a and b
	$scope.getSum = function () {
		return $scope.a + $scope.b
	}

	// An example object
	$scope.user = {
		name: 'Alice',
	}

	// Set the current date
	$scope.today = new Date()
})
