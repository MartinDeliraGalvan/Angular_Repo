(function (){
'use strict';

angular.module('MyLunch',[])
.controller('MyLunchController',function($scope){
$scope.food = "";

// initialized as empty, will take final value when
// clicking button
$scope.totalFood = "";

$scope.checkIfTooMuch = function (){
  var foodList = $scope.food.split(",");

// if input box is empty, don't show any message
  if($scope.food == ""){
    $scope.totalFood = "";
  }
  else if (foodList.length>0 && foodList.length<=3) {
    $scope.totalFood = "Enjoy!";
  }
  else if(foodList.length>3){
  $scope.totalFood = "Too Much!";
  }

};

});

})();
