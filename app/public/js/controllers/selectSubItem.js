angular.module('fazerumpedido').controller('selectSubItem', function($scope, $stateParams, $rootScope, $window, $ngBootbox, $http, $location){
   
  $scope.continuaPedido = function() {
  	for (var i = 0; i < $rootScope.novaPedidoServicoSub.length; i++) {
	  	if($rootScope.novaPedidoServicoSub[i].sub_valor ==  $rootScope.detalharCardapio.guardaSubValor ){
	  		$rootScope.guardarIDPedidoSubItem = $rootScope.novaPedidoServicoSub[i].idPedidoServicoSub;
	  		break;
	  	}
  	}
  	bootbox.hideAll();
    $location.path('/pedido');
  };
 $scope.sair = function(){
 	$rootScope.detalharCardapio.guardaSubValor = '';
 	bootbox.hideAll();
 };

 $rootScope.novaPedidoServicoSub = [];
 
 for (var i = 0; i < $rootScope.pedidoServicoSub.length; i++) {
 	if($rootScope.pedidoServicoSub[i].idProdutoServico == $rootScope.guardaItem.idProdutoServico){
		$rootScope.novaPedidoServicoSub.push($rootScope.pedidoServicoSub[i]); 		
 	}
 }
});