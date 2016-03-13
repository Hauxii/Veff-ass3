"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, $routeParams, centrisNotify, $translate){
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
	//console.log($scope.seller);
});