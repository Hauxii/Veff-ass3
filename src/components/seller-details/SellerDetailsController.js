"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, $routeParams, centrisNotify, $translate, ProductDlg){
	$scope.sellerID = parseInt($routeParams.sellerID);
	
	AppResource.getSellerDetails($scope.sellerID).success(function(seller){
		$scope.seller = seller;
	}).error(function(){
		centrisNotify.error("sellerdetails.Messages.UserLoadFailed");
	});

	$scope.onAllProducts = function onAllProducts(){
		AppResource.getSellerProducts($scope.sellerID).success(function(products){
			$scope.products = products;
		}).error(function(){
			centrisNotify.error("sellerDetails.Messages.ProductLoadFailed");
		});
	};

	$scope.onTopProducts = function onTopProducts(){
		$scope.products = {};
		console.log($scope.products);

	};

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product) {
			AppResource.addSellerProduct(parseInt($scope.sellerID), product).success(function(product){
				centrisNotify.success("products.Messages.SaveSucceeded");
				AppResource.getSellerProducts($scope.sellerID).success(function(products){
					$scope.products = products;
				}).error(function(){
					centrisNotify.error("sellerDetails.Messages.ProductLoadFailed");
				});
			}).error(function(){
				centrisNotify.error("products.Messages.SaveFailed");
			});
		});
	};

	$scope.onEditProduct = function onEditProduct(p) {
		ProductDlg.show(p).then(function(product) {
			AppResource.updateProduct(parseInt(p.id), product).success(function(p){
				centrisNotify.success("products.Messages.EditSucceeded");
			}).error(function(){
				centrisNotify.error("products.Messages.SaveFailed");
			});
		});
	};

});