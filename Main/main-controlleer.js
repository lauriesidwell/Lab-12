// using http service you get data from Reddit.
var app = angular.module('reddit');
app.controller('MainCtrl', function($scope, $timeout, RedditFactory){
	
	RedditFactory.getPosts()
		.then(function(result){
			$timeout($scope.posts = result);
		})
		.catch(function(error){
			$scope.error = 'there was as error getting posts';
		});
});