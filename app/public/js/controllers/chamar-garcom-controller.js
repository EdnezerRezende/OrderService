angular.module('fazerumpedido').controller('ChamarGarcomController', function($scope, $stateParams, $rootScope, $http, $ngBootbox) {

  $rootScope.tituloPagina4 = "garcons";
  $scope.counter = 0;

 
  $http({
      method: 'GET',
      url: '/garcon'
    })
    .then(function (success) {
        $rootScope.garcons = success.data;
    }, function(error){
      $log.error(err);
    });

    $scope.alertarGarcom = function(nome){
      $ngBootbox.alert({message: "O Garçon " + nome + "  atendeu a sua chamada. O Aguarde!", title: "Sucesso!"})
       .then(function() {
          $scope.mensagem = "";
          $scope.titleMensagem = "";
        });

    }
});
