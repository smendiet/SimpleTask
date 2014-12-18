angular.module('todoApp', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });

      $scope.todoText = '';
    }
  }]);
