angular.module('appMain.user')
/**
* Controller for users module
*/
.factory('UserService', ['$http', function($http){
	/**
	* Fetch all users
	*/
	var fetchUsers = function(callback){
		$http({
			method: 'GET',
			url: '/mwngPortal/rest/account'
		}).then(
			function success(response, data){
		        var results = response.data.data;
		        if(callback) {
		        	callback(null, results);
		        }
			},
			function error(response){
		        if(callback) {
		        	callback(response, null);
		        }
			}
		);
	};
	/**
	* Save User
	*/
	var saveUser = function(postData, callback){
		var config = {
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		};
		$http({
			url: '/mwngPortal/rest/account',
			method: 'POST',
			headers : config.headers,
			data: postData
		}).then(
			function(response, data){
		        var results = response.data;
		        if(callback) {
		        	callback(null, results);
		        }
			},
			function(response){
				console.log('Error in New User is:', response);
			}
		);
	};
	return {
		fetchUsers : fetchUsers,
		saveUser : saveUser
	};
}]);