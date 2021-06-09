(function () {
	'use strict';

angular.module('Lunchapp', [])
.controller('Lunchcontroller', Lunchcontroller)


Lunchcontroller.$inject = ['$scope'];
function Lunchcontroller($scope) {
  $scope.dishes = '';
  $scope.Msg = '';

  $scope.classify = function() {
    if ($scope.dishes.length == 0) {
      $scope.Msg = 'Please enter data first';
    } 
    else {
      let arr=$scope.dishes.split(',');
      if (arr.length <= 3) {
        $scope.Msg = 'Enjoy!';
      }
      else {
        $scope.Msg = 'Too much!';
      }      
    }
  }
}

})();