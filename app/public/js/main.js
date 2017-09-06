angular.module('fazerumpedido', ['ui.router', 'pascalprecht.translate', 'ngBootbox', 'webcam', 'bcQrReader'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

  $httpProvider.interceptors.push('tokenInterceptor');
  
   $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

  // Pagina principal (contém o Menu Superior e Inferior)
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: 'index.html',
    controller: 'PrincipalController'
  })
  // Página ativada quando solicitado o Cardápio.
  .state('cardapio', {
    url: "/cardapio",
    templateUrl: 'parciais/cardapio.html',
    controller: 'CardapioController'
    // controllerAs: 'PrincipalController'
  })

  // Página ativada quando Acompanhar o Pedido.
  .state('pedido', {
    url: "/pedido",
    templateUrl: 'parciais/fazerPedido.html',
    controller: 'FazerPedidoController'
  })

  // Página ativada quando solicitado Fechar Conta.
  .state('conta', {
    url: "/conta",
    templateUrl: 'parciais/fecharConta.html',
    controller: 'ContaController'
  })

  // Página ativada quando Acompanhar o Pedido.
  .state('acompanhamento', {
    url: "/acompanhamento",
    templateUrl: 'parciais/acompanharPedido.html',
    controller: 'AcompanharPedidoController'
  })

  .state('login', {
    url: "/login",
    templateUrl: 'parciais/login.html',
    controller: 'LoginController'
  })

  .state('gerarQrCode', {
    url: "/gerarQrCode",
    templateUrl: 'parciais/gerarQrCode.html',
    controller: 'LoginController'
  })

  // Página ativada quando Acompanhar o Pedido.
  .state('chamar', {
    url: "/chamar",
    templateUrl: 'parciais/chamarGarcom.html',
    controller: 'ChamarGarcomController'

  });

  


})
.run(['$rootScope', '$window', '$state', '$ngBootbox', '$http', '$location',
  function ($rootScope, $window, $state, $ngBootbox, $http, $location) {
    
    $rootScope.tituloPagina = "";
    $rootScope.tituloPagina2 = "";
    $rootScope.tituloPagina3 = "";
    $rootScope.tituloPagina4 = "";

    $rootScope.acesso = 0;
    $rootScope.goBack = function(){
      $rootScope.detalharCardapio.observacao = "";
      $rootScope.detalharCardapio.quantidade = 1;
      $rootScope.detalharCardapio.restricao = "";
      $window.history.back();
    };

     $rootScope.localizacoes = [];
     $rootScope.mensagem = "";
     $rootScope.pedidos = [];
     $rootScope.acompanhamentos = [];
     $rootScope.categorias = [];
     $rootScope.cardapio = [];
     $rootScope.detalharCardapio = {};
     $rootScope.garcons = [];
     $rootScope.temPedido = false;
     //$rootScope.idCliente = '';
     $rootScope.idQrCode = '';

    $rootScope.qrcode = {};
    $rootScope.cameraRequested = true;
    $rootScope.cameraIsOn = true;

    //flag para validar se está sendo feito um novo pedido ou não. Caso esteja, vai ser encaminhado para o método
    // de gravarPedido(), se não vai para o método obterItensAcompanhamentoEFecharConta()
    $rootScope.fazerPedido = false;
    $rootScope.naoSolicitarParaAcompanhamento = false;

  $rootScope.validarRegistrarQrCode = function() {
      if(!$rootScope.naoSolicitarParaAcompanhamento){
        $ngBootbox.customDialog($rootScope.customDialogOptions);
      }else{
        $rootScope.naoSolicitarParaAcompanhamento = false;
      }
  };

   $rootScope.customDialogOptions = {
            //message: 'This is a message!',
            templateUrl: './parciais/qrCodeIdentificacao.html',
            title: 'Insira seu QrCode para Confirmar o pedido',
            onEscape: function() {
                $rootScope.naoSolicitarParaAcompanhamento = false;
                $rootScope.fazerPedido = false;
                $rootScope.cancelar();
            },
            show: true,
            backdrop: true,
            closeButton: true,
            animate: true,
            className: 'test-class',
            buttons: $rootScope.customDialogButtons,
            message: 'test'
  };
 
  $rootScope.customDialogButtons = {
          danger: {
              label: "Cancelar",
              className: "btn-danger",
              callback: function() { $rootScope.cancelar(); }
          }
  };

  $rootScope.cancelar = function(){
      $rootScope.cameraRequested = false;
      $rootScope.cameraIsOn = false;
        if ($window.localMediaStream) {
          $window.localMediaStream.active = false;
          $window.localMediaStream = null;
        }        
    }

  $rootScope.inserirQrCodeManual = function(){
      $rootScope.cancelar();
      bootbox.hideAll();
      $rootScope.obterIdQrCode();
  }

  //Se obter o Id do Qr Code com sucesso, o mesmo irá gravar o Pedido do Cliente
  $rootScope.obterIdQrCode = function(){

      $http({ 
        method: 'POST',
        url: '/qrCode_obterid',
        data:  $rootScope.qrcode  
      })
      .then(function (success) {
        $rootScope.idQrCode = '';

        $rootScope.idQrCode = success.data[0].idQrCode;

        if($rootScope.fazerPedido){
          $rootScope.gravarPedido();
          $rootScope.naoSolicitarParaAcompanhamento = true;
        }else{
          $rootScope.obterItensAcompanhamentoEFecharConta();
        }
       

      }, function(error){
        $rootScope.mensagem = error;
        $rootScope.titleMensagem = "Ops!";
      });
  }

   //grava o Pedido na tabela e chama a página de acompanhamento
    $rootScope.gravarPedido = function(){
                $rootScope.envioPedido = {};
                $rootScope.envioPedido.idProdutoServico = $rootScope.detalharCardapio.idProdutoServico;     
                $rootScope.envioPedido.quantidade = $rootScope.detalharCardapio.quantidade;
                $rootScope.envioPedido.statusImpressao = 1;     
                $rootScope.envioPedido.restricao = $rootScope.detalharCardapio.restricao;   
                $rootScope.envioPedido.idQrCode = $rootScope.idQrCode;     
                $rootScope.envioPedido.statusDescricao = "Recebido";     
                $rootScope.envioPedido.tempoPreparo = $rootScope.detalharCardapio.tempoPreparo;
                $rootScope.envioPedido.idLocalizacao = $rootScope.detalharCardapio.idLocalizacao;
         
                $rootScope.temPedido = true;
                  $http({ 
                    method: 'POST',
                    url: '/pedido_acompanhamento',
                    data:  $rootScope.envioPedido 
                  })
                  .then(function (success) {
                    $ngBootbox.alert({message: "Pedido Inserido com sucesso, acompanhe o andamento", title: "Sucesso!"})
                      .then(function() {
                          $rootScope.mensagem = "";
                          $rootScope.titleMensagem = "";
                      });
                      $location.path('/acompanhamento');
                      $rootScope.fazerPedido = false;
                      $rootScope.obterItensAcompanhamentoEFecharConta();

                  }, function(error){
                    $rootScope.mensagem = error;
                    $rootScope.titleMensagem = "Ops!";
                  });
    }


    $rootScope.obterItensAcompanhamentoEFecharConta = function (){
      console.log("IdQrCode: "+$rootScope.idQrCode);
     $http({
        method: 'GET',
        url: '/pedido_acompanhamento/' + $rootScope.idQrCode
      })
      .then(function (success) {
        console.log(success.data);
          $rootScope.acompanhamentos = success.data;
          //$rootScope.idQrCode ='';
      }, function(error){
        console.log("Erro: " + error);
      });
      
    }

    $rootScope.obterLocalizacao = function(){
      $http({
        method: 'GET',
        url: '/localizacao'
      })
      .then(function (success){
        $rootScope.localizacoes = success.data;
      }, function(error){
        console.log( "Erro: " + error );
      });
    }

}]);
