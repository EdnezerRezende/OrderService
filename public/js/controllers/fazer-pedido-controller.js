angular.module('fazerumpedido').controller('FazerPedidoController', function($scope, $stateParams, $rootScope, $window){
  $rootScope.tituloPagina = "Pedido";
  $rootScope.detalharCardapio.quantidade = 1;
  // $rootScope.pedido.valor = $rootScope.detalharCardapio.valor;

  $scope.btnDiminuir = function(){
    if($rootScope.detalharCardapio.quantidade > 1){
      var guarda = $rootScope.detalharCardapio.quantidade;
      guarda = guarda - 1;
      // $rootScope.pedido.valor =  $rootScope.pedido.valor - $rootScope.detalharCardapio.valor;
      $rootScope.detalharCardapio.quantidade = guarda;
    }
  };

  $scope.btnAumentar = function(){
    if($rootScope.detalharCardapio.quantidade >= 1){
      var guarda = $rootScope.detalharCardapio.quantidade;
      guarda = guarda + 1;
      // $rootScope.pedido.valor =  $rootScope.pedido.valor + $rootScope.detalharCardapio.valor;
      $rootScope.detalharCardapio.quantidade = guarda;
    }
  };

  $scope.submeter =  function(){
    $rootScope.detalharCardapio.status = "Recebido";
    $rootScope.detalharCardapio.statusCod = 1;
    // var now = new Date();
    // $rootScope.detalharCardapio.horaPedido = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() ;
    $rootScope.detalharCardapio.horaPedido = new Date();
    $rootScope.acompanhamentos.push($rootScope.detalharCardapio);

  };

});
