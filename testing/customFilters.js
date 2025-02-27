var myApp = angular.module('myApp', [])

myApp.filter('reverse', function () {
	return function (input) {
		input = input || ''
		var reversed = input.split('').reverse().join('')
		return reversed
	}
})

myApp.controller('FilterController', function ($scope) {
	$scope.greeting = 'Hello, World!'
})
