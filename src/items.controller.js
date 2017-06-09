(function () {
'use strict';

angular.module('MenuApp')
.controller("ItemDetailController", ItemDetailController);

ItemDetailController.$inject=['items'];
function ItemDetailController(items) {
  var list = this;

  list.items = items;
}

})();
