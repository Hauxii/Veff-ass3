"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, $routeParams, centrisNotify, $translate, ProductDlg){
	$scope.sellerID = parseInt($routeParams.sellerID);
	
	AppResource.getSellerDetails($scope.sellerID).success(function(seller){
		$scope.seller = seller;
	}).error(function(){
		centrisNotify.error("sellerdetails.Messages.UserLoadFailed");
	});

	AppResource.getSellerProducts($scope.sellerID).success(function(products){
		$scope.products = products;
	}).error(function(){
		centrisNotify.error("sellerDetails.Messages.ProductLoadFailed");
	});

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product) {
			AppResource.addSellerProduct(parseInt($scope.sellerID), product).success(function(product){
				centrisNotify.success("products.Messages.SaveSucceeded");
			}).error(function(){
				centrisNotify.error("products.Messages.SaveFailed");
			});
		});
	};

});