/*(function () {
'use strict';
angular.module('NameCalculator',[])
.controller('FirstController',function($scope){
$scope.name= "Abhi";
$scope.totvalue=0;
$scope.findval= function(){
  $scope.totvalue=getNumeric($scope.name);
}
function getNumeric(string)
{
  var totalvalue=0;
  for(var i=0;i<string.length;i++)
  {
    totalvalue+=string.charCodeAt(i);
  }
  return totalvalue;
}
});




})();*/
(function(){'use strict';angular.module('NameCalculator',[]).controller('FirstController',function($scope){$scope.name="Abhi";$scope.totvalue=0;$scope.findval=function(){$scope.totvalue=getNumeric($scope.name)}
function getNumeric(string)
{var totalvalue=0;for(var i=0;i<string.length;i++)
{totalvalue+=string.charCodeAt(i)}
return totalvalue}})})()
