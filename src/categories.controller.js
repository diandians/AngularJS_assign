(function () {
  'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject=['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories, items) {
    var list = this;
    list.categories = categories.data;

}

})();
