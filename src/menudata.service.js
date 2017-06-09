(function () {
'use strict';

angular.module('Data')
.service("MenuDataService", MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject=['ApiBasePath', '$http'];
function MenuDataService(ApiBasePath, $http) {
  var menu = this;

  menu.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  menu.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
     });
    return response.data.menu_items;
  };
}

})();
