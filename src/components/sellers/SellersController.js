"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg, $location, $translate) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;
	AppResource.getSellers().success(function(sellers){
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function(){
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller){
				centrisNotify.success("sellers.Messages.SaveSucceeded");
			}).error(function(){
				centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(editSeller) {
		var editID = editSeller.id;
		SellerDlg.show(editSeller).then(function(editSeller) {
			AppResource.updateSeller(editID, editSeller).success(function(seller){
				centrisNotify.success("sellers.Messages.EditSucceeded");
			}).error(function(){
				centrisNotify.error("sellers.Messages.EditFailed");
			});
		});
	};

	$scope.onSellerDetails = function onSellerDetails(sellerID) {
		$location.path("/seller/" + sellerID);
	};

});