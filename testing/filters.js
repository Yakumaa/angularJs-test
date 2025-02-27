// Define the module
var myApp = angular.module('myApp', [])

// Define a controller to hold some sample data
myApp.controller('FilterController', function ($scope) {
	$scope.today = new Date()
	$scope.price = 19.99
	$scope.name = 'angularJS filters'

	// Sample array for ordering and filtering
	$scope.numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]
})
