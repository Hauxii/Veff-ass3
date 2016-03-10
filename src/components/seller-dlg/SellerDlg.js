"use strict";

angular.module("project3App").factory("SellerDlg",
function($uibModal) {
	return {
		show: function() {
			var modalInstance = $uibModal.open({
				templateUrl: "components/seller-dlg/seller-dlg.html",
				controller: "SellerDlgController"
			});

			return modalInstance.result;
		}
	};
});