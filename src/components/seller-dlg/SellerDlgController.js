"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope, modalParam) {
	
	var sellerObj = modalParam.seller;

	console.log(sellerObj);

	if(sellerObj !== undefined){
		$scope.seller = {
			name: sellerObj.name,
			category: sellerObj.category,
			imagePath: sellerObj.imagePath
		};
	}else{
		$scope.seller = {
			name: "",
			category: "",
			imagePath: ""
		};
	}
	
	$scope.onOk = function onOk() {
		$scope.$close($scope.seller);
	};
	
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});