angular.module('fazerumpedido').controller('ChamarGarcomController', function($scope, $stateParams, $rootScope, $http, $ngBootbox, $window, $location) {
  $rootScope.garconChamado.idLocalizacao = '';
  $rootScope.tituloPagina4 = "garcons";
  $scope.counter = 0;
  $rootScope.obterGarcons = true;
  $rootScope.garcons = [];

  $http({
    method: 'GET',
    url: '/garcon'
  }) 
  .then(function (success) {
      $rootScope.garcons = success.data;
      $rootScope.obterLocalizacao();
  }, function(error){
    console.log(error);
  });
 
    $scope.solicitarLocalizacao = function(idGarcon, nome){
      $rootScope.garconChamado.idGarcon = idGarcon;
      $rootScope.garconChamado.nome = nome;
      $rootScope.confirmarQrCodeGarcom = true;
      //$rootScope.obterIdQrCode();
      $ngBootbox.customDialog($scope.localizacaoGarcom);
    }

    $scope.localizacaoGarcom = {
            templateUrl: './parciais/garcomLocalizacao.html',
            title: 'Informe sua Localizacao',
            onEscape: function() {
                $scope.cancelar();
            },
            show: true,
            backdrop: true,
            closeButton: true,
            animate: true,
            className: 'test-class',
            buttons: $scope.botoesCustomizados,
            message: 'test'
  };
 
  $scope.botoesCustomizados = {
          danger: {
              label: "Cancelar",
              className: "btn-danger",
              callback: function() { $rootScope.cancelar(); }
          }
  };
 
  $scope.cancelar = function(){
         
  }

  
    $rootScope.alertarGarcom = function(){
      console.log("IdLocalizacao "+$rootScope.garconChamado.idLocalizacao);
      if($rootScope.garconChamado.idLocalizacao.length > 0){
        $rootScope.chamar = {};
        $rootScope.chamar.idGarcon = $rootScope.garconChamado.idGarcon;
        $rootScope.chamar.idLocalizacao = $rootScope.garconChamado.idLocalizacao;
        $rootScope.chamar.idQrCode = $rootScope.idQrCode;
        bootbox.hideAll();
       $http({ 
                method: 'POST',
                url: '/garcon_chamado' ,
                data: $rootScope.chamar
              })
              .then(function (success) {

                $ngBootbox.alert({message: "O Garçon " + $rootScope.garconChamado.nome + "  atendeu a sua chamada. O Aguarde!", title: "Sucesso!"})
                  .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                      $scope.login = 0;
                  });
                  $location.path('/home');
              }, function(error){
                $ngBootbox.alert({message: "Não conseguimos acionar o garçom, tente novamente!", title: "Ops!"})
                  .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                      $scope.login = 0;
                  });
               
              });
        }else{
            $ngBootbox.alert({message: "Não conseguimos obter sua Localização, favor tente novamente, Obrigado!", title: "Ops!"})
            .then(function() {
                $scope.mensagem = "";
                $scope.titleMensagem = "";
                $scope.login = 0;
            });
        }
    }
});
