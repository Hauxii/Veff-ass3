"use strict";

angular.module("project3App").controller("ProductDlgController", 
function SellerDlgController($scope, centrisNotify, $translate) {

	$scope.product = {
		name: "",
		price: "",
		quantityInStock: "",
		imagePath: ""
	};


	
	$scope.onOk = function onOk() {
		//validation
		var error = false;
		
		if($scope.product.quantityInStock.length < 1){
			centrisNotify.error("products.Messages.QuantityInStockMissing");
			error = true;
		}
		if($scope.product.price < 1){
			centrisNotify.error("products.Messages.PriceMissing");
			error = true;
		}
		if($scope.product.name.length < 1){
			centrisNotify.error("products.Messages.NameMissing");
			error = true;
		}
		
		if(!error){
			if($scope.product.imagePath < 1){
				$scope.product.imagePath = "http://image005.flaticon.com/1/png/128/20/20773.png";
			}
			$scope.product.quantitySold = 0;

			$scope.$close($scope.product);
		}
	};
	
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});