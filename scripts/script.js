var app = angular.module('myApp', []);
var ip = "http://localhost:5000"

app.controller('testController', function ($scope, $http) {
  // $scope.home = "This is the homepage";
    $scope.getRequest = function () {
      console.log("I've been pressed!");
      $http.get(ip + "/api/v1/categories/")
        .then(function successCallback(response) {
          // $scope.home=response.data
          $scope.records = response.data
        }, function errorCallback(response) {
          console.log("Unable to perform get request");
        });
    };

    $scope.AddCategory = function(){
      var text = $scope.addcategory
      console.log(text)
      if(text==null){
        alert("No data")
        return console.log("no")
      }
      else{
        var arr1 = new Array();
        arr1.push(text);
        console.log(arr1)

        $http.post(ip+"/api/v1/categories/",arr1)
        .then(function success(){
         alert("category added");
         $scope.addcategory=""
        },function errorCallback(response){
          console.log("Unable to perform get request");
        });
      }
    };

    $scope.removeCategory = function(){
      var text = $scope.deletecategory
      console.log(text)
      if(text==null){
        alert("No data")
        return console.log("no")
      }
      else{
        var arr1 = new Array();
        arr1.push(text);
        console.log(arr1)

        $http.delete(ip+"/api/v1/categories/",arr1)
        .then(function success(){
         alert("category deleted");
         $scope.deletecategory=""
        },function errorCallback(response){
          console.log("Unable to perform get request");
        });
      }
    };

    $scope.init = function () {
      $scope.heading_categories = "Categories"
      
      $http.get(ip + "/api/v1/categories/")
        .then(function successCallback(response) {
          // $scope.home1 = response.data
          $scope.categories = response.data
        }, function errorCallback(response) {
          console.log("Unable to perform get request");
        });
    };

    $scope.listacts = function () {
      $scope.acts_in_category = "acts in category:"
      var text = this
      console.log("hello")
      alert(text)
      console.log(text)
      $http.get(ip + "/api/v1/categories/"+ text + "/acts/")
        .then(function successCallback(response) {
          var resp = JSON.parse(response.data)
          console.log(resp)
          console.log(response.data)
          // for(int i=0;i<resp.length;i++)
          // {

          // }
          // $scope.home = response.data
          $scope.items = JSON.parse(response.data)
          
        }, function errorCallback(response) {
          console.log("Unable to perform get request");
        });
    };
  }
);
