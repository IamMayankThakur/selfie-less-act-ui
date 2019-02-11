var app = angular.module('myApp', []);

app.controller('testController', function ($scope, $http) {
  $scope.home = "This is the homepage";
    $scope.getRequest = function () {
      console.log("I've been pressed!");
      $http.get("http://localhost:8000/api/v1/categories/")
        .then(function successCallback(response) {
          console.log(response);
        }, function errorCallback(response) {
          console.log("Unable to perform get request");
        });
    };
});
