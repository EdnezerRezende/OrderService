angular.module('fazerumpedido').controller('selectSubItem', function($scope, $stateParams, $rootScope, $window, $ngBootbox, $http, $location){
   
  $scope.continuaPedido = function() {
    $rootScope.guardarIDPedidoSubItem = $rootScope.detalharCardapio.idPedidoServicoSub;
  	for (var i = 0; i < $rootScope.novaPedidoServicoSub.length; i++) {
	  	if($rootScope.novaPedidoServicoSub[i].idPedidoServicoSub ==  $rootScope.detalharCardapio.idPedidoServicoSub ){
        $rootScope.detalharCardapio.sub_titulo = $rootScope.novaPedidoServicoSub[i].sub_titulo;
        $rootScope.detalharCardapio.sub_valor = $rootScope.novaPedidoServicoSub[i].sub_valor;
	  		$rootScope.detalharCardapio.idProdutoServico = $rootScope.novaPedidoServicoSub[i].idProdutoServico;
        $rootScope.detalharCardapio.TemSubProduto = true;
	  		break;
	  	}
  	}
    if($rootScope.guardarIDPedidoSubItem > 0){
      bootbox.hideAll();
      $location.path('/pedido');
    }
  };

 $scope.sair = function(){
 	$rootScope.detalharCardapio = {};
 	bootbox.hideAll();
  $rootScope.esconderBtnVoltar = false;
  //$window.history.back();
 };

 $rootScope.novaPedidoServicoSub = [];
 
 for (var i = 0; i < $rootScope.pedidoServicoSub.length; i++) {
 	if($rootScope.pedidoServicoSub[i].idProdutoServico == $rootScope.guardaItem.idProdutoServico){
		$rootScope.novaPedidoServicoSub.push($rootScope.pedidoServicoSub[i]); 		
 	}
 }
});