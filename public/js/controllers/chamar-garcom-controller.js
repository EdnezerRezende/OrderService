angular.module('fazerumpedido').controller('ChamarGarcomController', function($scope, $stateParams, $rootScope) {

  $rootScope.tituloPagina4 = "garcons";
  $scope.mensagemAlerta = "";
  $scope.chamar = function(nome){
    $scope.mensagemAlerta = "O Garçon " + nome + " está vindo para lhe atender, aguarde que em breve ele chegará ai!";
  }
});
