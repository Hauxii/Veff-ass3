"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, $routeParams){
	$scope.sellerID = $routeParams.sellerID;
	
	AppResource.getSellerDetails(parseInt($scope.sellerID)).success(function(seller){
		$scope.seller = seller;
	}).error(function(){
		$scope.title = "ERROR 404 - You a tard";
	});

	$scope.title = "asshole";
	//console.log($scope.seller);
});