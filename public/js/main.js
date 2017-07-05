angular.module('selfservice', ['ngRoute', 'ngAnimate', 'pascalprecht.translate'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  // Pagina principal (contém o Menu Superior e Inferior)
  $routeProvider.when('home', {
    templateUrl: 'index.html',
    controller: 'PrincipalController'
  });

  // Página ativada quando solicitado o Cardápio.
  $routeProvider.when('/home/cardapio', {
    templateUrl: 'parciais/cardapio.html',
    controller: 'CardapioController'
  });


  // Página ativada quando Acompanhar o Pedido.
  $routeProvider.when('/home/pedido/:itemId', {
    templateUrl: 'parciais/fazerPedido.html',
    controller: 'CardapioController',
    controllerAs: 'FazerPedidoController'
  });

  // Página ativada quando solicitado Fechar Conta.
  $routeProvider.when('/home/conta', {
    templateUrl: 'parciais/fecharConta.html',
    controller: 'ContaController'
  });

  // Página ativada quando Acompanhar o Pedido.
  $routeProvider.when('/home/acompanhamento', {
    templateUrl: 'parciais/acompanharPedido.html',
    controller: 'AcompanharPedidoController'
  });

  // Página ativada quando Acompanhar o Pedido.
  $routeProvider.when('/home/chamar', {
    templateUrl: 'parciais/chamarGarcom.html',
    controller: 'ChamarGarcomController'
  });

  $routeProvider.otherwise({redirectTo: 'home'});

});
