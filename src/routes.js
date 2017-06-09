(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // categories list
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // item detail
  .state('categories.itemDetail', {
    url: '/itemDetail/{categoryShortName}',
    templateUrl: 'src/templates/item-detail.template.html',
    controller: 'ItemDetailController as list',
    // params: {
    //   categoryShortName: null
    // },
    resolve: {
      items: ['$stateParams','MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory(stateParams.categoryShortName);
      }]
    }
  });

}

})();
