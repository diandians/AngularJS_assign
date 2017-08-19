(function () {
'use strict';

angular.module('Mod1App', [])
.controller('Mod1Controller', Mod1Controller);

Mod1Controller.$inject = ['$scope'];
function Mod1Controller($scope) {
  $scope.name = "";
  $scope.show = "";
  $scope.clear = function () {
    $scope.show = "";
    $scope.updateColor = {"color":"black"};
    $scope.updateBorderColor = {"border-color":"black"};
  }
  $scope.showCheck = function () {
    var whatToEat = $scope.name.split(',');
    var length = 0;
    for (var i = 0; i < whatToEat.length; i++) {
      if (whatToEat[i] != "") {
        length++;
      }
    }
    if (length == 0) {
      $scope.show = "Please enter data first";
      $scope.updateColor = {"color":"red"};
      $scope.updateBorderColor = {"border-color":"red"};
    }
    else if (length <= 3) {
      $scope.show = "Enjoy!";
      $scope.updateColor = {"color":"green"};
      $scope.updateBorderColor = {"border-color":"green"};
    }
    else {
      $scope.show = "Too much!";
      $scope.updateColor = {"color":"green"};
      $scope.updateBorderColor = {"border-color":"green"};
    }
  };
}

})();
