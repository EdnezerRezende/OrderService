angular.module('fazerumpedido', ['ui.router', 'pascalprecht.translate'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('home');

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
    url: "/pedido/:id",
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

  // Página ativada quando Acompanhar o Pedido.
  .state('chamar', {
    url: "/chamar",
    templateUrl: 'parciais/chamarGarcom.html',
    controller: 'ChamarGarcomController'
  });

})
.run(['$rootScope', '$window',
function ($rootScope, $window) {
  $rootScope.tituloPagina = "";

  $rootScope.goBack = function(){
   $window.history.back();
  };

   $rootScope.detalharCardapio=[];
   $rootScope.pedido=[];

   $rootScope.categorias = [
     {
       id: 1,
       tipo: "Petiscos"
     },
     {
       id: 2,
       tipo: "Bebidas"
     },
     {
       id: 3,
       tipo: "Sobremesas"
     },
     {
       id: 4,
       tipo: "Salgados"
     }
   ];

   $rootScope.cardapio = [
     {
       id: 1,
       categoria: "Sobremesas",
       titulo: "Found de Chocolote",
       url: "img/found.jpg",
       descricao: "Found de Chocolate com guarnições de Banana, morango e abacaxi",
       valor: 35.00
     },
     {
       id:2,
       categoria: "Petiscos",
       titulo: "Petiscos Variados",
       url: "img/petiscos_Variados.jpg",
       descricao: "Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão",
       valor: 30.00
     },
     {
       id:3,
       categoria: "Petiscos",
       titulo: "Pão recheado",
       url: "img/pao_carne.jpg",
       descricao: "Contém uma porção de 12 unidades de pão recheado com carne",
       valor: 15.00
     },
     {
       id:4,
       categoria: "Petiscos",
       titulo: "Pastel de Carne 2",
       url: "img/pastelzinho.jpg",
       descricao: "Contém uma porção de 6 unidades de Pastel tamanho médio, sabor carne",
       valor: 15.00
     },
     {
       id:5,
       categoria: "Petiscos",
       titulo: "Petiscos Variados 2",
       url: "img/petiscos_Variados.jpg",
       descricao: "Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão",
       valor: 30.00
     },
     {
       id:6,
       categoria: "Salgados",
       titulo: "Coxinha de Frango",
       url: "img/coxinha.jpg",
       descricao: "Coxinha de Frango com catupiry",
       valor: 4.50
     },
     {
       id:7,
       categoria: "Bebidas",
       titulo: "Coca-Cola",
       url: "img/coxinha.jpg",
       descricao: "Regrigerante sabor Coca-Cola",
       valor: 4.00
     }
   ];

}]);
;
