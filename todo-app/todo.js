var todoApp = angular.module('todoApp', [])

// todoApp.config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       controller: 'todoCtrl',
//       templateUrl: 'index.html'
//     })
//     .when('/view2', {
//       controller: 'todoCtrl',
//       templateUrl: 'view2.html'
//     })
//     .otherwise({redirectTo: '/'});
// });

todoApp.controller('todoCtrl', function($scope) {
  $scope.todos = [
    {text: "Learn AngularJS", done: false},
    {text: "Build an app", done: false},
    {text: "Deploy to cloud", done: false},
  ];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  }

  $scope.remaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    })
    return count;
  }

  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
    $scope.totalTodos++;
  }

  $scope.remove = function () {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  }
});

