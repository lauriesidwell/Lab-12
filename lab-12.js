// Always need an array when you create  module.
var app = angular.module('reddit', ['ngRoute']);
	
app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/main', {
			templateUrl: 'Main/main',
			controller: 'MainCtrl'
		})
		.when('/favorites',{
				templateUrl: 'Favorites/favorites',
				controller: 'FavCtrl'
		})
		.otherwise({
			redirectTo: '/main'
		});
	
	$locationProvider.hashPrefix('');
});