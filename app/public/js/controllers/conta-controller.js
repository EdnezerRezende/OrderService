angular.module('fazerumpedido').controller('ContaController', function($scope, $stateParams, $rootScope, $http, $ngBootbox, $window, $location) {

  $rootScope.tituloPagina3 = "label.tituloFecharConta";
  $rootScope.acompanhamentos = [];
  $scope.somaVlrTotal = 0;
  $scope.somaTotal = function(item, quantidade){
    $scope.somaVlrTotal = $scope.somaVlrTotal + (item*quantidade);
  };
  $scope.solicitarFecharConta = {};
  $scope.solicitarFecharConta.opcaoDinheiro = false;
  $scope.solicitarFecharConta.opcaoDebito = false;
  $scope.solicitarFecharConta.opcaoCredito = false;
  $scope.solicitarFecharConta.opcaoRefeicao = false;

  $scope.fecharConta = function (){
      $scope.solicitarFecharConta.idQrCode = $rootScope.idQrCode;

       $http({ 
              method: 'POST',
              url: '/fechar_conta',
              data:  $scope.solicitarFecharConta 
            })
            .then(function (success) {
                var idQrCode = $scope.solicitarFecharConta.idQrCode;

                  $http({
                    method: 'PUT',
                    url: '/pedido_acompanhamento/fechar_itens/' + idQrCode,
                  })
                  .then(function (success) {
                    $ngBootbox.alert({message: "Recebemos sua solicitação, estamos encaminhando o garçom para receber seu pagamento. Muito Obrigado!", title: "Sucesso!"})
                      .then(function() {
                          $scope.mensagem = "";
                          $scope.titleMensagem = "";
                          $scope.login = 0;
                      });
                          $scope.solicitarFecharConta = {};
                          $rootScope.idQrCode = '';
                          $rootScope.acompanhamentos = [];
                          delete $window.sessionStorage.token;
                          $location.path('/home');
                     
                  }, function(error){
                    console.log("Erro: " + error);
                  });

            }, function(error){
              $scope.mensagem = error;
              $ngBootbox.alert({message: "Sistema Fora do Ar! Tente novamente mais tarde ou Chame um Garçom. Desculpe!", title: "Ops!"})
                .then(function() {
                    $scope.mensagem = "";
                    $scope.titleMensagem = "";
                    $scope.login = 0;
                });
            });
  };
});
