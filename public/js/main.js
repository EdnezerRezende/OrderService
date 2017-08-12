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
  $rootScope.tituloPagina2 = "";
  $rootScope.tituloPagina3 = "";
  $rootScope.tituloPagina4 = "";

  $rootScope.enviarItem = function (item){
    var i = 0;
    var a = false;
    var id = item.id;
    while(i < $rootScope.cardapio.length && a === false){
      if($rootScope.cardapio[i].id === id){
        a= true;
        $rootScope.detalharCardapio = $rootScope.cardapio[i];
        var id = $rootScope.detalharCardapio.id;
        $window.location.href = 'cardapio#'+id;

      }else {
        i++;
      }
    }

  };

  $rootScope.goBack = function(){
    $rootScope.detalharCardapio.observacao= "";
    $rootScope.detalharCardapio.quantidade = 1;
    $rootScope.detalharCardapio.restricao = "";
    $window.history.back();
  };

   $rootScope.detalharCardapio=[];
   $rootScope.pedidos = [];
   $rootScope.acompanhamentos = [
     {
       id: 1,
       categoria: "Sobremesas",
       titulo: "Found de Chocolote",
       url: "img/found.jpg",
       descricao: "Found de Chocolate com guarnições de Banana, morango e abacaxi",
       restricao: "Muito morango",
       observacao: "Serve 3 Pessoas",
       quantidade: "1",
       status: "Em Preparo",
       statusCod: 2,
       evolucao: 0,
       tempo: 25,
       valor: 35.00
     },
     {
       id:3,
       categoria: "Petiscos",
       titulo: "Pão recheado",
       url: "img/pao_carne.jpg",
       descricao: "Contém uma porção de 12 unidades de pão recheado com carne",
       restricao: "sem cebola",
       observacao: "Serve 3 Pessoas",
       quantidade: "3",
       status: "Pronto",
       statusCod: 3,
       evolucao: 0,
       tempo: 20,
       valor: 15.00
     },
     {
       id:3,
       categoria: "Petiscos",
       titulo: "Pão recheado",
       url: "img/pao_carne.jpg",
       descricao: "Contém uma porção de 12 unidades de pão recheado com carne",
       restricao: "sem cebola",
       observacao: "Serve 3 Pessoas",
       quantidade: "1",
       status: "Entregue",
       statusCod: 4,
       evolucao: 0,
       tempo: 20,
       valor: 15.00
     },
   ];

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
       observacao: "Serve 3 Pessoas",
       tempo: 25,
       valor: 35.00
     },
     {
       id:2,
       categoria: "Petiscos",
       titulo: "Petiscos Variados",
       url: "img/petiscos_Variados.jpg",
       descricao: "Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão",
       observacao: "Serve 3 Pessoas",
       tempo: 30,
       valor: 30.00
     },
     {
       id:3,
       categoria: "Petiscos",
       titulo: "Pão recheado",
       url: "img/pao_carne.jpg",
       descricao: "Contém uma porção de 12 unidades de pão recheado com carne",
       observacao: "Serve 3 Pessoas",
       tempo: 20,
       valor: 15.00
     },
     {
       id:4,
       categoria: "Petiscos",
       titulo: "Pastel de Carne 2",
       url: "img/pastelzinho.jpg",
       descricao: "Contém uma porção de 6 unidades de Pastel tamanho médio, sabor carne",
       observacao: "Serve 3 Pessoas",
       tempo: 15,
       valor: 15.00
     },
     {
       id:5,
       categoria: "Petiscos",
       titulo: "Petiscos Variados 2",
       url: "img/petiscos_Variados.jpg",
       descricao: "Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão",
       observacao: "Serve 3 Pessoas",
       tempo: 25,
       valor: 30.00
     },
     {
       id:6,
       categoria: "Salgados",
       titulo: "Coxinha de Frango",
       url: "img/coxinha.jpg",
       descricao: "Coxinha de Frango com catupiry",
       tempo: 5,
       observacao: "Serve 1 Pessoas",
       valor: 4.50
     },
     {
       id:7,
       categoria: "Bebidas",
       titulo: "Coca-Cola",
       url: "img/coxinha.jpg",
       descricao: "Regrigerante sabor Coca-Cola",
       observacao: "600 ml",
       tempo: 2,
       valor: 4.00
     }
   ];

   $rootScope.garcons = [
     {
       id: 1,
       foto: "img/garcons/garcon1.jpg",
       nome: "Narigodon",
       apresentacao: "Simpático e animado, sempre disposto a atender com alegria.",
    },
    {
      id: 2,
      foto: "img/garcons/garcon2.jpg",
      nome: "Zoinho",
      apresentacao: "Alegria em pessoa. Nunca deixa de satisfazer o cliente.",
   },
   {
     id: 3,
     foto: "img/garcons/garcon3.jpg",
     nome: "Honestino",
     apresentacao: "Pessoa honesta, muito tímido porém com grandes sugestões e dicas para suas solicitações.",
   },
   {
     id: 4,
     foto: "img/garcons/garcon4.jpg",
     nome: "Simpatilda",
     apresentacao: "Alegre e animada. Rápida nos pedidos e sempre atenciosa.",
   }
   ];
}]);
