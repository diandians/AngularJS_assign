(function () {
'use strict';
angular.module('CheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOff',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOff'];
function ToBuyController(ShoppingListCheckOff) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOff.getToBuyItems();

  toBuyList.moveItem = function (itemIndex) {
      ShoppingListCheckOff.moveItemToBought(itemIndex);
  };

  toBuyList.noneItems = function () {
    return ShoppingListCheckOff.checkToBuyItems();
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
function AlreadyBoughtController(ShoppingListCheckOff) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOff.getAlreadyBoughtItems();
  alreadyBoughtList.moveItem = function (itemIndex) {
    ShoppingListCheckOff.moveItemToBuy(itemIndex);
  };
  alreadyBoughtList.noneItems = function () {
    return ShoppingListCheckOff.checkAlreadyBoughtItems();
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {
      name: "cookies",
      quantity: "2"
    },
    {
      name: "oranges",
      quantity: "6"
    },
    {
      name: "books",
      quantity: "8"
    },
    {
      name: "bananas",
      quantity: "9"
    },
    {
      name: "apples",
      quantity: "66"
    },
  ];
  var alreadyBoughtItems = [];
  var alreadyNone = false;

  service.moveItemToBought = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    // remove from ToBuy list
    toBuyItems.splice(itemIndex, 1);
    // push to AlreadyBought list
    alreadyBoughtItems.push(item);
  }

  service.moveItemToBuy = function (itemIndex) {
    var item = alreadyBoughtItems[itemIndex];
    // remove from AlreadyBought list
    alreadyBoughtItems.splice(itemIndex, 1);
    // push to ToBuy list
    toBuyItems.push(item);
  }

  service.getToBuyItems = function () {
    return toBuyItems;
  }

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  }

  service.checkAlreadyBoughtItems = function () {
    return alreadyBoughtItems.length == 0;
  }

  service.checkToBuyItems = function () {
    return toBuyItems.length == 0;
  }

}

})();
