// Define the module
var helloWorldApp = angular.module('helloWorldApp', [])

// Define the controller
helloWorldApp.controller('HelloWorldController', function ($scope) {
	$scope.greeting = 'Hello, World!'
})
