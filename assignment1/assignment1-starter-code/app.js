(function (){
  angular.module('MyApp',[]).controller('CheckEnjoy',Mycontroller)
  Mycontroller.$inject=['$scope'];
  function  Mycontroller($scope){
    $scope.message="";
    $scope.check= function () {
    //  console.log("name is",(($scope.name).split(",")).length);
      if ((($scope.name).split(",")).length>3){
        $scope.message="Too much!";
      }
      else{
        $scope.message="Enjoy!";
      }
    }
  }
} )();
