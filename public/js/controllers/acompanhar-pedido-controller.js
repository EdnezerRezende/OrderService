angular.module('fazerumpedido').controller('AcompanharPedidoController', function($scope, $rootScope) {
    $rootScope.tituloPagina2 = "label.tituloAcompanhar";


    $scope.width=0;
    $scope.calculaBarra = function (item){

        if ( item.statusCod === 1){
          width = "25";
          console.log("25");
          item.evolucao=25;
        }else if (item.statusCod === 2) {
          width = "50";
          console.log("50");
          item.evolucao=50;
        }else if ( item.statusCod === 3) {
            width = "75";
            console.log("75");
            item.evolucao=75;
        }else if ( item.statusCod === 4) {
            width = "100";
            console.log("100");
            item.evolucao=100;
        }
        console.log("final");
        // return $scope.width;
    };

});
