angular.module('fazerumpedido')
.controller('AcompanharPedidoController', function($scope, $rootScope, $window, $filter, $ngBootbox, $http) {
    $rootScope.tituloPagina2 = "label.tituloAcompanhar";
    
    $scope.mostra = false;
    var now = new Date();
    
    $scope.login = 1;

    $http({
      method: 'GET',
      url: '/pedido_acompanhamento/' + $rootScope.idCliente
    })
    .then(function (success) {
      console.log(success.data);
        $rootScope.acompanhamentos = success.data;
    }, function(error){
      console.log("Erro: " + error);
      //$log.error(err);
    });

    $scope.horaAtual = now;
    $scope.contagem = 0;
    
    $scope.btnCancelar = function (item){
      var index = $scope.acompanhamentos.indexOf(item);
      
      $http({
        method: 'DELETE',
        url: '/pedido_acompanhamento/' + item,
      })
      .then(function (success) {
        $ngBootbox.alert({message: "Pedido Excluído.", title: "Sucesso"})
          .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
              $scope.login = 0;
          });
        $scope.acompanhamentos.splice(index, 1);
      }, function(error){
        console.log("Erro: " + error);
      });

    };

    $scope.btnAlertar = function (item){
      var idPedido = item.idPedido;
      
      $http({
        method: 'PUT',
        url: '/pedido_acompanhamento/' + idPedido,
      })
      .then(function (success) {
         $ngBootbox.alert({message: "Avisamos a Central sobre a demora do Pedido", title: "Aguarde"})
          .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
              $scope.login = 0;
          });
      }, function(error){
        $ngBootbox.alert({message: "Não conseguimos avisar a Central, tente novamente mais tarde!", title: "Ops!"})
          .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
              $scope.login = 0;
          });
        console.log("Erro: " + error);
      });

    };

    $scope.calcularTempoPedido = function(item){
      var calculoPrevisao = new Date(item.dataHoraPrevisaoEntrega)
      console.log("calculoPrevisao: " + calculoPrevisao);
      item.tempoAtraso = $scope.horaAtual.getTime() - calculoPrevisao.getTime() ;
      console.log("Tempo Atrado: " + item.tempoAtraso);
    };
});
