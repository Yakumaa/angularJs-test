// Define our main module
var myApp = angular.module('myApp', [])

// Create a service using the .service() method
myApp.service('MathService', function () {
	// This method calculates the square of a number
	this.square = function (number) {
		return number * number
	}
})

// Create a controller that injects MathService
myApp.controller('MathController', function ($scope, MathService) {
	// Set a sample number on the scope
	$scope.number = 5

	// Use MathService to compute the square of the number
	$scope.result = MathService.square($scope.number)
})
