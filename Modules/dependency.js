(function (){
'use strict';

angular.module('DIApp',[])
.controller('DIController',DIController);

function DIController($scope, $filter,$injector) {
  $scope.name="Martin";

  $scope.upper = function (){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

function AnnotateMe(name,job,blah) {
  return "totoi";
}
console.log($injector.annotate(DIController));
// console.log(DIController.toString());


}

})();
