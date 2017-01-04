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
	})
	/*sub states for user*/
	.state('user.new', {
		//url: '/user/new'
		url: '/new',
		controller: 'UserCtrl',
		templateUrl: 'user/user-new.tpl.html'
	})
	.state('user.detail', {
		url: '/detail/:id',
		controller: 'UserCtrl',
		templateUrl: 'user/user-detail.tpl.html'
	});
});