var guestControllers = angular.module('guestControllers', []);

guestControllers.controller('GuestController', ['$scope', '$http', 
function($scope, $http, $localStorage) {
	$http.get('js/panamaData.json').success(function(data) {
		// Data from json file
		$scope.downloaded = data;

		$scope.guestOrder = 'name';
		$scope.guestSearch = '';
		$scope.instruction = 'Please, start typing';

		// To store the string from user input
		$scope.dataField = '';

		$scope.replaceAll = function(String) {
			String = String.replace(/a/g, "");
			alert("hey");
		};

		$scope.panamaData = $scope.downloaded.pages.extract.split("\n");
		function toObject() {

			for (var i = 0; i < $scope.panamaData.length; i++) {
				var newItem = $scope.panamaData[i];
				$scope.panamaData[i] = {
					idx : newItem
				};
			}
		};
		toObject();

		$scope.tester = [1, 2, 3];

		$scope.hide_logo = false;
		
		function sticky_relocate() {
			var window_top = $(window).scrollTop();
			var div_top = $('#sticky-anchor').offset().top;
			if (window_top > div_top) {
				$('#searchBar').addClass('stick');
				$('#sticky-anchor').height($('#searchBar').outerHeight());
			} else {
				$('#searchBar').removeClass('stick');
				$('#sticky-anchor').height(0);
			}
		}

		$(function() {
			$(window).scroll(sticky_relocate);
			sticky_relocate();
		});

	});
}]);
