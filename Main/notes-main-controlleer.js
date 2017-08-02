// using http service you get data from Reddit.
var app = angular.module('reddit');
app.controller('MainCtrl', function($scope, $http){
	
	$http.get('https://www.reddit.com/r/aww/.json')
	
	// 'result' could be answer or any other word.
	// .then means do this and then do something else.
	.then(function(result){
		// $scope shows any data from the controller will show in the web page.
		 $scope.posts = result.data.data.children;
	});	
});