"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope, modalParam, centrisNotify, $translate) {
	
	var sellerObj = modalParam.seller;
	//console.log(sellerObj);

	if(sellerObj !== undefined){
		$scope.seller = {
			name: sellerObj.name,
			category: sellerObj.category,
			imagePath: sellerObj.imagePath
		};
	} 
	else{
		$scope.seller = {
			name: "",
			category: "",
			imagePath: ""
		};
	}



	
	$scope.onOk = function onOk() {
		//validation
		var error = false;
		if($scope.seller.name.length < 1 && $scope.seller.category.length < 1){
			error = true;
			centrisNotify.error("sellers.Messages.ValidationError");
		}
		else if($scope.seller.name.length < 1){
			centrisNotify.error("sellers.Messages.NameMissing");
			error = true;
		}
		else if($scope.seller.category.length < 1){
			centrisNotify.error("sellers.Messages.CategoryMissing");
			error = true;
		}
		if($scope.seller.imagePath < 1){
			$scope.seller.imagePath = "http://vignette3.wikia.nocookie.net/the-enigma-corporation/images/0/01/Users-User-icon.png/revision/latest?cb=20140213102228";
		}
		if(!error){
			$scope.$close($scope.seller);
		}
	};
	
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});