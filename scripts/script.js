var app = angular.module('myApp', []);

app.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.useXDomain = true;

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

]);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





app.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";
    
   
    
    $scope.getRequest = function () {
        console.log("I've been pressed!");
        // var url="http://localhost:8000/api/v1/categories/sports2/acts/"
        // $http({
        //     method: 'JSONP',
        //     url: url
        // }).
      
        $http.get("http://localhost:8888")
            .then(function successCallback(response){
                
                $scope.response = response;
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };


    
});


