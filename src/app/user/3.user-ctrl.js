angular.module('appMain.user')
/**
* Controller for users module
*/
.controller('UserCtrl', ['$scope', '$state', 'UserService', 
	function($scope, $state, UserService){
	/**
	* Method which loads users by default
	*/
	UserService.fetchUsers(function(err, responseData){
		if(err != null){

		} else {
			$scope.userList = responseData.accountList;		
		}
	}); 

	$scope.formData = {};
	
	$scope.newUser = function(){
		var postData = {
			username : $scope.formData.username,
			password : $scope.formData.password,
			firstName : $scope.formData.firstName,
			lastName: $scope.formData.lastName
		};
		UserService.saveUser(postData, function(err, responseData){
			if (err != null) {

			} else {
				$scope.userList.push(responseData);
				$state.go('user', {}, {reload: true});
			}
		});
	};
}]);