angular.module('todoApp', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
      if ($scope.todoText != '' && typeof $scope.todoText != 'undefined') {
        $scope.todos.push({
          text: $scope.todoText,
          done: false
        });

        $scope.todoText = undefined;
      } else {
        $("#myModal").modal();
      }
    }
  }]);
