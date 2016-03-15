"use strict";

angular.module("project3App").directive('tabs',
function($translate){
	return {
		restrict: "E",
		templateUrl: 'components/tabs/tabs.html',
		link: function(scope, element, attrs) {
			//console.log(scope);
		}
	};

});