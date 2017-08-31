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
    // controllerAs: 'PrincipalController'
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
.run(['$rootScope', '$window', '$state',
  function ($rootScope, $window, $state) {
    
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

     $rootScope.mensagem = "";
     $rootScope.pedidos = [];
     $rootScope.acompanhamentos = [];
     $rootScope.categorias = [];
     $rootScope.cardapio = [];
     $rootScope.detalharCardapio = {};
     $rootScope.garcons = [];
     $rootScope.temPedido = false;
     $rootScope.idCliente = '';
}]);
