"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller/:sellerID", {
		controller: "SellerDetailsController",
		templateUrl: "components/seller-details/seller-details.html"
	});

	//$translateProvider.use("is");
});
