angular.module('fazerumpedido').controller('ContaController', function($scope, $stateParams, $rootScope) {

  $rootScope.tituloPagina3 = "label.tituloFecharConta";
  $scope.somaVlrTotal = 0;
  $scope.somaTotal = function(item, quantidade){
    $scope.somaVlrTotal = $scope.somaVlrTotal + (item*quantidade);
  };
  $scope.opcaoDinheiro = false;
  $scope.opcaoDebito = false;
  $scope.opcaoCredito = false;

  $scope.fecharConta = function (){
    
  };
});
