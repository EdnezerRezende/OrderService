angular.module('selfservice').controller('CardapioController', function($scope, $routeParams ) {

    $scope.esconderCategoria = '';

    // if($routeParams.itemId){
    //   $scope.pedido = $scope.cardapio + $routeParams.itemId;
    //   console.log("aqui");
    //   console.log($scope.pedido);
    // }

    $scope.enviarItem = function (item){
      $scope.pedido = item;
      console.log($scope.pedido);
    };

    $scope.filtro = '';

    $scope.categorias = [
      {
        tipo: "Petiscos"
      },
      {
        tipo: "Bebidas"
      },
      {
        tipo: "Sobremesas"
      },
      {
        tipo: "Salgados"
      }
    ];
    $scope.cardapio = [
      {
        categoria: "Sobremesas",
        titulo: "Found de Chocolote",
        url: "img/found.jpg",
        descricao: "Found de Chocolate com guarnições de Banana, morango e abacaxi",
        valor: 35.00
      },
      {
        categoria: "Petiscos",
        titulo: "Petiscos Variados",
        url: "img/petiscos_Variados.jpg",
        descricao: "Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão",
        valor: 30.00
      },
      {
        categoria: "Petiscos",
        titulo: "Pão recheado",
        url: "img/pao_carne.jpg",
        descricao: "Contém uma porção de 12 unidades de pão recheado com carne",
        valor: 15.00
      },
      {
        categoria: "Petiscos",
        titulo: "Pastel de Carne 2",
        url: "img/pastelzinho.jpg",
        descricao: "Contém uma porção de 6 unidades de Pastel tamanho médio, sabor carne",
        valor: 15.00
      },
      {
        categoria: "Petiscos",
        titulo: "Petiscos Variados 2",
        url: "img/petiscos_Variados.jpg",
        descricao: "Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão",
        valor: 30.00
      },
      {
        categoria: "Salgados",
        titulo: "Coxinha de Frango",
        url: "img/coxinha.jpg",
        descricao: "Coxinha de Frango com catupiry",
        valor: 4.50
      },
      {
        categoria: "Bebidas",
        titulo: "Coca-Cola",
        url: "img/coca-cola.jpg",
        descricao: "Regrigerante sabor Coca-Cola",
        valor: 4.00
      }
    ];

    // $scope.pedido = [];
});
