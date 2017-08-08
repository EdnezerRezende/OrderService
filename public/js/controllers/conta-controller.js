angular.module('fazerumpedido').controller('ContaController', function($scope, $stateParams, $rootScope) {

  $rootScope.tituloPagina3 = "label.tituloFecharConta";
  $scope.somaVlrTotal = 0;
  $scope.somaTotal = function(item, quantidade){
    $scope.somaVlrTotal = $scope.somaVlrTotal + (item*quantidade);
  };

  $scope.fecharConta = function (){
      alert("Sua conta está encerrada, passe no Caixa para realizar o pagamento. Muito Obrigado!");
  };
});
