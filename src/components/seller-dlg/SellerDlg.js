"use strict";

angular.module("project3App").factory("SellerDlg",
function($uibModal) {
	return {
		show: function(seller) {
			var modalInstance = $uibModal.open({
				templateUrl: "components/seller-dlg/seller-dlg.html",
				controller: "SellerDlgController",

				resolve: {
                modalParam: function() {
                    return {
                			seller: seller
              			};
            		}
         		}
			});

			return modalInstance.result;
		}
	};
});