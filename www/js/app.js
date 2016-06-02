// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'



var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('customersCtrl', function($scope, $http) {

    $http.get("http://localhost/cordova/query.php")
	.success(function (response) {
		console.log(response);
		$scope.names = $sce.trustAsHtml(response.records);
		//$scope.names = response.records;
		
		});
});
 app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
 $scope.toggleLeft=function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
});