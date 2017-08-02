var app = angular.module('reddit');
app.factory('RedditFactory', function($http){
	var postData;

	return {
		getPosts: getPosts
	};

	function getPosts(){
		if(postData){
			// if we already haave dat, rtrn that.
			return Promise.resolve(postData);

		}
		// if we don't have data, use http service to get data from reddit.
		return $http.get('https://www.reddit.com/r/aww/.json')
		
		// 'result' could be answer or any other word.
		// .then means do this and then do something else.
		.then(function(result){
			postData = result.data.data.children

			// $scope shows any data from the controller will show in the web page.
			 return postData;
			});	
		};

})