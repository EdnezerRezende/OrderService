angular.module('minhasDiretivas',[])
.directive('verificarCategoria', function(){
  return{
    console.log("diretiva");
      restrict: 'AE',
      var guarda = "";
      scope = {
        categoria = "@"
      }
      // link: function (scope){

        if(categoria != guarda){
            $scope.esconderCategoria = false;
        }else{
          $scope.esconderCategoria = true;
        }
      // }
  };


});
