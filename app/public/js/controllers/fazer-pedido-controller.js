angular.module('fazerumpedido').controller('FazerPedidoController', function($scope, $stateParams, $rootScope, $window, $ngBootbox, $http, $location){
    

  $rootScope.tituloPagina = "Pedido";
  //$rootScope.detalharCardapio.quantidade = 1;
  $scope.mensagem = "";
  $scope.titleMensagem = "";
 
 

  $scope.btnDiminuir = function(){
    if($scope.detalharCardapio.quantidade > 1){
      var guarda = $scope.detalharCardapio.quantidade;
      guarda = guarda - 1;
      // $rootScope.pedido.valor =  $rootScope.pedido.valor - $rootScope.detalharCardapio.valor;
      $rootScope.detalharCardapio.quantidade = guarda;
    } 
  };

  $scope.btnAumentar = function(){
    if($rootScope.detalharCardapio.quantidade >= 1){
      var guarda = $rootScope.detalharCardapio.quantidade;
      guarda = guarda + 1;
      // $rootScope.pedido.valor =  $rootScope.pedido.valor + $rootScope.detalharCardapio.valor;
      $rootScope.detalharCardapio.quantidade = guarda;
    }
  };


  $scope.login = 0;
 
  $scope.submeter =  function(){

   
   /* $ngBootbox.prompt('Por favor, insira sua identificação/QRCode:')
    .then(function(result) {*/
        //$scope.login = result;
        
       // if ($scope.login == 1) {
            $scope.envioPedido = {};

            $scope.envioPedido.idProdutoServico = $rootScope.detalharCardapio.idProdutoServico;     
            $scope.envioPedido.quantidade = $rootScope.detalharCardapio.quantidade;
            $scope.envioPedido.statusImpressao = 1;     
            $scope.envioPedido.restricao = $rootScope.detalharCardapio.restricao;   
            console.log("ID Cliente: " + $rootScope.idCliente);
            $scope.envioPedido.idCliente = $rootScope.idCliente;     
            $scope.envioPedido.statusDescricao = "Recebido";     
            $scope.envioPedido.tempoPreparo = $rootScope.detalharCardapio.tempoPreparo;
            $rootScope.temPedido = true;
              $http({ 
                method: 'POST',
                url: '/pedido_acompanhamento',
                data:  $scope.envioPedido 
              })
              .then(function (success) {
                $ngBootbox.alert({message: "Pedido Inserido com sucesso, acompanhe o andamento", title: "Sucesso!"})
                  .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                      $scope.login = 0;
                  });
                      $rootScope.temPedido = false;
                      $location.path('/acompanhamento');

              }, function(error){
                $scope.mensagem = error;
                $scope.titleMensagem = "Ops!";
                //console.log(error);
              });

          /*}
          else{
            $ngBootbox.alert({message: "Não reconhecemos seu Login/QRCode, favor verificar junto ao Caixa!", title: "Ops!"})
            .then(function() {
                $scope.mensagem = "";
                $scope.titleMensagem = "";
                $scope.login = 0;
            });*/
          };


  /*  }, function() {
        //console.log("Não foi adiante!");
    });*/
    
    
  //};

 
});
