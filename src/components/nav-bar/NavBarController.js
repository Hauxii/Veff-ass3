"use strict";

angular.module("project3App").controller("NavBarController",
function($scope, $translate){
	$scope.translate = function(lang) {
		$translate.use(lang);
	};
});