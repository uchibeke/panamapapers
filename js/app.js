var myApp = angular.module('myApp', ['ngRoute', 'guestControllers']);

myApp.config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/footer', {
		templateUrl : 'partials/footer.html',
		controller : 'GuestController'
	}).when('/printPage', {
		templateUrl : 'partials/printPage.html',
		controller : 'GuestController'
	}).when('/home', {
		templateUrl : 'partials/home.html',
		controller : 'GuestController'
	}).otherwise({
		redirectTo : '/home'
	});
}]);

