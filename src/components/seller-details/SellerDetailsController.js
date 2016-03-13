"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, $routeParams, $translate){
	$scope.sellerID = parseInt($routeParams.sellerID);
	
	AppResource.getSellerDetails($scope.sellerID).success(function(seller){
		$scope.seller = seller;
	}).error(function(){
		$scope.title = "ERROR 404 - You a tard";
	});

	AppResource.getSellerProducts($scope.sellerID).success(function(products){
		$scope.products = products;
	}).error(function(){
		$scope.title = "ERROR 404 - Y U NO SELL PRODUCTS";
	});
	$scope.title = "asshole";
	//console.log($scope.seller);
});