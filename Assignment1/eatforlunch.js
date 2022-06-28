(function (){
'use strict';

angular.module('MyLunch',[])
.controller('MyLunchController',function($scope){
  $scope.food = "";
  $scope.totalFood = "";

    $scope.checkIfTooMuch = function (){
      var foodList =  $scope.food.split(",").filter(function (el){ return el !=""})

      if($scope.food == ""){$scope.totalFood = "Please enter data first";}
      else if (foodList.length>0 && foodList.length<=3) {$scope.totalFood = "Enjoy!";}
      else if(foodList.length>3){$scope.totalFood = "Too Much!";}

    };
  });
})();
