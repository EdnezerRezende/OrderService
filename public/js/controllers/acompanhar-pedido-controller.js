angular.module('fazerumpedido').controller('AcompanharPedidoController', function($scope, $rootScope, $window, $timeout, $filter, $ngBootbox) {

    $rootScope.tituloPagina2 = "label.tituloAcompanhar";
    var now = new Date();
    $scope.horaAtual = now.getTime();

      // $scope.mensagem = "";
    $scope.tempoPercorrido = 0;
    $scope.btnCancelar = function (item){
      var index = $scope.acompanhamentos.indexOf(item);
      $scope.acompanhamentos.splice(index, 1);
    };
    $scope.btnAlertar = function (item){
      var now = new Date();
      var hrSolicitado = new Date(item.horaPedido);
      console.log(now.getMinutes());
      console.log(hrSolicitado.getMinutes());
      if((now.getMinutes() - hrSolicitado.getMinutes()) <= item.tempo){
        $rootScope.mensagem = "Ainda não deu o tempo";
      }else{
        $rootScope.mensagem = "Avisamos a Central sobre a demora do Pedido";
      }
      return $scope.mensagem;

    };





});
