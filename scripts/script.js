var app = angular.module('myApp', []);
// var ip = "http://23.20.246.30"
var ip = "http://localhost:8000"


app.controller('testController', function ($scope, $http) {
  // $scope.home = "This is the homepage";
    $scope.getRequest = function () {
      console.log("I've been pressed!");
      $http.get(ip + "/api/v1/categories")
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

        $http.post(ip+"/api/v1/categories",arr1)
        .then(function success(){
         alert("category added");
         $scope.addcategory=""
        },function errorCallback(response){
          console.log("Unable to perform get request");
        });
      }
    };


    $scope.UploadAct = function(){
      console.log("hello")
      var actid = $scope.actid
      var username = $scope.username
      var caption = $scope.caption
      var imgb64 = $scope.imgupload
      var category = $scope.category
      console.log(actid)
      console.log(imgb64)

      if(actid==null || username == null || caption==null){
        alert("No data")
        return console.log("no")
      }
      else{
        var date = new Date();
        var timestamp = date.getTime();
        var imgB64 = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvb"
        var JSONobj ={}
        JSONobj["actId"] = actid
        JSONobj["username"] = username
        JSONobj["caption"] = caption
        JSONobj["categoryName"] = category
        JSONobj["imgB64"] = imgB64

        $http.post(ip+"/api/v1/acts",JSONobj)
        .then(function success(){
         alert("category added");
         $scope.actid=""
         $scope.username=""
         $scope.caption = ""
         $scope.imgb64 =""
         $scope.category=""
        },function errorCallback(response){
          console.log("Unable to perform get request");
        });
      }
    };

    $scope.UpvoteAct = function(){
      
      var text = $(this).val("value")[0]

      // console.log(text)
      for (const [key, value] of Object.entries(text)) {
        if(key == "x")
        {
          console.log(value)
          var text2 = value
          for (var key2 in text2)
           {
            if (key2 == "actId") 
            {
              var val = text2[key2];
              console.log(val);
            }
            if(key2=="upvotes")
            {
              var val2 = text2[key2]
              console.log(val2)
            }
          }
        }
      }

      var arr1 = new Array()
      arr1.push(val)
      console.log(arr1)
      console.log($scope.upvotebutton)
      $scope.upvotebutton = val2 + 1
      $http.post(ip+"/api/v1/acts/upvote",arr1)
      .then(function success(){
      
  
      },function errorCallback(response){
        console.log("Unable to perform get request");
      });
    
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

        $http.delete(ip+"/api/v1/categories/"+text)
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
      
      $http.get(ip + "/api/v1/categories")
        .then(function successCallback(response) {
          //  $scope.home1 = response.data
          
          $scope.categories = response.data
        }, function errorCallback(response) {
          console.log("Unable to perform get request");
        });
    };

    $scope.listacts = function () {
      $scope.acts_in_category = "acts in category:"
      var text = $(this).val("value")[0]
 
      for (const [key, value] of Object.entries(text)) {
        if(key == "key"){
          console.log(value)
          var text2 = value
          
        }
      }
      
      // console.log("hello")
      // alert(text)
      // console.log(text)
      $http.get(ip + "/api/v1/categories/"+ text2 + "/acts")
        .then(function successCallback(response) {
          var resp = JSON.parse(response.data)
          console.log(resp)
          console.log(response.data)
          if(response.data ==null)
          {
            $scope.items=""
          }

          $scope.items = JSON.parse(response.data)
          
        }, function errorCallback(response) {
          console.log("Unable to perform get request");
        });
    };
  }
);
