angular.module('fazerumpedido').controller('AcompanharPedidoController', function($scope, $rootScope, $timeout) {
    $rootScope.tituloPagina2 = "label.tituloAcompanhar";


    $scope.width=0;
    $scope.calculaBarra = function (item){

        if ( item.statusCod === 1){
          width = "25";
          item.evolucao=25;
        }else if (item.statusCod === 2) {
          width = "50";
          item.evolucao=50;
        }else if ( item.statusCod === 3) {
            width = "75";
            item.evolucao=75;
        }else if ( item.statusCod === 4) {
            width = "100";
            item.evolucao=100;
        }
    };
    // controles da barra de progressão
    $scope.barraDesabilitada = true;
    $scope.barraCompleta = true;
    $scope.barraActive = true;

    //Tratamento de Botões Cancelar o pedido e avisar atraso no pedido
    $scope.tratarHorario = [];
    $scope.habilitarBotaoTempo = true;

    $scope.tempoPercorrido = function (tempoPedido, tempoPreparo, status, id){
      var contagem = tempoPreparo;
      $scope.tratarHorario.calculo = contagem;
      $scope.tratarHorario.id = id;
      var intervalo = window.setInterval(function() {
        contagem--;
        console.log(contagem + " ID: "+ id);
        $scope.tratarHorario.calculo = contagem;
        $scope.tratarHorario.id = id;

        if( contagem == 0 ){
          console.log("Habilitar Botão" + contagem);
          $scope.habilitarBotaoTempo = true;
          clearInterval(intervalo);
        }
        // else{
        //   var promise = $timeout($scope.tempoPercorrido(tempoPedido, contagem, status, id), 60000);
        // }

      }, 60000);

    };

});
