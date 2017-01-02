angular.module('appMain.user')
/**
* Controller for users module
*/
.controller('UserCtrl', ['$scope', 'UserService', function($scope, UserService){
	console.log("I am user controller");
	$scope.readMe = "Iam User list template";
	UserService.getUsers(function(err, data){
		if(err != null){

		} else {
			$scope.userList = data.accountList;	
			console.log('controller user lsit', $scope.userList);		
		}
	});
}]);