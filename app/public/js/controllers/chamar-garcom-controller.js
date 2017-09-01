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

    $scope.alertarGarcom = function(garcon){
      var idGarcon = garcon.idGarcon;
       $http({ 
                method: 'POST',
                url: '/garcon_chamado/' + idGarcon
              })
              .then(function (success) {

                $ngBootbox.alert({message: "O Garçon " + garcon.nome + "  atendeu a sua chamada. O Aguarde!", title: "Sucesso!"})
                  .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                      $scope.login = 0;
                  });

              }, function(error){
                $ngBootbox.alert({message: "Não conseguimos acionar o garçom, tente novamente!", title: "Ops!"})
                  .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                      $scope.login = 0;
                  });
               
              });

    }
});
