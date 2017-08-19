(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearch', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

// My directive for foundItems
function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl:'foundItems.html',
    scope:{
      foundItems:'<',
      onRemove:'&',
      title:'@title'
    },
    controller:FoundItemsDirectiveController,
    controllerAs:'list',
    bindToController: true
  };

  return ddo;
}

// Controller for foundItems directive. This is optional.
// can change codes to another style by:
// Delete this controller and configeration below scope in the
// FoundItemsDirective as well as list in foundItems.
function FoundItemsDirectiveController() {
  var list = this;

  list.foundNothing = function () {
      return list.foundItems.length == 0;
  }
}


NarrowItDownController.$inject = ['MenuSearch'];
function NarrowItDownController(MenuSearch) {
  var narrowDown = this;
  var origTitle = "Found ";
  narrowDown.title = "";
  narrowDown.found = [];

  narrowDown.getMenu = function () {
    narrowDown.found = [];
    if (narrowDown.searchTerm) {
      var promise = MenuSearch.getMatchedMenuItems(narrowDown.searchTerm);
      promise.then(function (response) {
        narrowDown.found = response;
        var length = narrowDown.found.length;
        narrowDown.title = origTitle + length + " items ";
      })
      .catch(function (error) {
          console.log("Something went terribly wrong with promise.");
      });
    } else {
      var length = 0;
      narrowDown.title = origTitle + length + " items ";
    }
  }


  narrowDown.removeItem = function(itemIndex) {
    narrowDown.found.splice(itemIndex, 1);
    var length = narrowDown.found.length;
    narrowDown.title = origTitle + length + " items ";
  }

}

// MenuSearchService is to get menu from herokuapp and filter them using
// searchTerm.
MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var menuService = this;
  var list = [];

  menuService.getMatchedMenuItems = function (searchTerm) {
    list = [];
    searchTerm = searchTerm.trim().toLowerCase();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json") })
    .then(function success(result) {
      // search only description to get matched items.
      // var list = [];
      var item = result.data.menu_items;
      for (var i = 0; i < item.length; i++) {
        if (item[i].description.toLowerCase().indexOf(searchTerm) != -1) {
          list.push(item[i]);
        }
      }
      return list;

    }, function error() {
      console.log("error occurs in $http");
    });
  };

}

})();
