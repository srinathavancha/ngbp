angular.module('appMain.user', [
	'ui.router'
])
/**
* Config for users route page
*/
.config(function config($stateProvider){
	$stateProvider.state('user', {
		url: '/user',
		views: {
			"main": {
				controller: 'UserCtrl',
				templateUrl: 'user/user-list.tpl.html'
			}
		},
		data: {
			pageTitle: "User"
		}
	});
});