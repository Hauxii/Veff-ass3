"use strict";

angular.module("project3App").directive('product',
function($translate){
	return {
		restrict: "E",
		templateUrl: 'components/product/product.html',
		link: function(scope, element, attrs) {
			//console.log(scope);
		}
	};

});