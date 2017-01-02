angular.module('appMain.user')
/**
* Controller for users module
*/
.factory('UserService', ['$http', function($http){
	var getUsers = function(callback){
		$http({
			method: 'GET',
			url: '/mwngPortal/rest/account'
		}).then(
			function success(response, data){
		        var results = response.data.data;
		        console.log('factory results', results);
		        if(callback) {
		        	callback(null, results);
		        }
			},
			function error(response){
		        console.log('error getting items');
		        if(callback) {
		        	callback(response, null);
		        }
			}
		);
	};
	return {
		getUsers : getUsers
	};
}]);