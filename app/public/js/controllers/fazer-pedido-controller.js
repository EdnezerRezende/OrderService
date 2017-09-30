angular.module('fazerumpedido').controller('FazerPedidoController', function($scope, $stateParams, $rootScope, $window, $ngBootbox, $http, $location){
    
 
  $rootScope.tituloPagina = "Pedido";
  $scope.mensagem = "";
  $scope.titleMensagem = "";
  $rootScope.fazerPedido = true;
  $rootScope.obterLocalizacao();

  $scope.detalharCardapio.idLocalizacao = '';

  $scope.ativaLoginManual = false;
  $scope.labelButtonAtivarLogin = 'Ativa Login Manual';

  $scope.btnDiminuir = function(){
    if($scope.detalharCardapio.quantidade > 1){
      var guarda = $scope.detalharCardapio.quantidade;
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

   $scope.continue = false;

   $scope.fechar = function(url){
    $window.parent.Shadowbox.close();
   }
});
