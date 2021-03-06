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

	$translateProvider.fallbackLanguage('en');

	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});

	$translateProvider.useSanitizeValueStrategy('escape');
	
	$translateProvider.preferredLanguage('is');

});
