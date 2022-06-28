(function (){
'use strict';

angular.module('MyCalculator',[])
.controller('MyCalculatorController',function($scope){
$scope.name = "";
$scope.totalValue = 0;

$scope.displayNumeric = function (){
  var totalValueName = calculateNumericForString($scope.name);
  $scope.totalValue = totalValueName;
};

function calculateNumericForString(string){
  var totalStringValue = 0;
  for (var i = 0; i < string.length; i++){
    totalStringValue += string.charCodeAt(i);
  }
  return totalStringValue;
}

});

})();
