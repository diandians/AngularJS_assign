(function () {

angular.module('MenuApp')
.controller("ItemDetailController", ItemDetailController);

ItemDetailController.$inject=['MenuDataService','items'];
function ItemDetailController(MenuDataService, items) {
  var list = this;

  list.items = items;
  console.log(items);
}

})();
