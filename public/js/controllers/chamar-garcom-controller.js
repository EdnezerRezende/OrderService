angular.module('fazerumpedido').controller('ChamarGarcomController', function($scope, $stateParams, $rootScope) {

  $rootScope.tituloPagina4 = "garcons";

  $scope.chamar = function(nome){
    alert("O Garçon " + nome + " está vindo para lhe atender, aguarde que em breve ele chegará ai!");
  }
});
