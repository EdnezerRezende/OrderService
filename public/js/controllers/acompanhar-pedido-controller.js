angular.module('fazerumpedido')
.controller('AcompanharPedidoController', function($scope, $rootScope, $window, $filter, $ngBootbox) {
    $rootScope.tituloPagina2 = "label.tituloAcompanhar";
    $scope.mostra = false;
    var now = new Date();
    $scope.mensagemAcompanhamento = "";
    $scope.horaAtual = now.getTime();
    $scope.contagem = 0;
    $scope.btnCancelar = function (item){
      var index = $scope.acompanhamentos.indexOf(item);
      $scope.acompanhamentos.splice(index, 1);
    };

    $scope.calcularTempoPedido = function(item){
      item.tempoAtraso = 0;
      var data = new Date(item.horaPedido),
          minutos = item.tempo;
      data.setMinutes(data.getMinutes() + minutos);
      item.contagem = data.getTime();
      if( new Date().getTime() > data.getTime() ){
        var temp = new Date().getTime() - data.getTime();
        item.tempoAtraso = new Date(temp).getTime();
        $scope.mensagemAcompanhamento = "Avisamos a Central sobre a demora do Pedido";
      }

    };
});
