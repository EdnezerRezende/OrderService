angular.module('fazerumpedido').controller('CardapioController', function($scope, $stateParams, $rootScope, $window, $http, $location) {
    $rootScope.tituloPagina = "Cardapio";
    //var ctrl = this;

    $scope.esconderCategoria = '';
    $scope.filtro = '';
    $rootScope.detalharCardapio.subItemSelecionado = 0;
    $rootScope.detalharCardapio.guardaSubValor = '';
    $http({
      method: 'GET',
      url: '/cardapio_servico'
    })
    .then(function (success) {
        $rootScope.cardapio = success.data;
    }, function(error){
      console.log(error);
    });

    $http({
      method: 'GET',
      url: '/pedido_servico_sub'
    })
    .then(function (success) {
        $rootScope.pedidoServicoSub = success.data;
    }, function(error){
      console.log(error);
    });

    $http({
      method: 'GET',
      url: '/categoria'
    })
    .then(function (success) {
        $rootScope.categorias = success.data;
    }, function(error){
      console.log(error);
    });

   /* $scope.enviarItem = function (item){
      $rootScope.detalharCardapio = {};
      $rootScope.detalharCardapio = item;
      //$location.path('/pedido/item.idProdutoServico');
      console.log($rootScope.detalharCardapio);
    };*/

    $scope.detalhar = function(item) {
      var indice = 0;
      $rootScope.detalharCardapio = item;
      $rootScope.detalharCardapio.quantidade = 1;

      
      for (var i = 0; i < $rootScope.pedidoServicoSub.length; i++) {
        
        indice = $rootScope.pedidoServicoSub[i].idProdutoServico;

        if( item.idProdutoServico == indice ){
          $rootScope.subItemPossiveis = indice;
          $rootScope.selecionarSubItem(item);
          break;
        }
      }
      
      if( item.idProdutoServico != indice ){
        $location.path('/pedido');
      }
     };

    $scope.fechaMenu = false;
    $scope.vlrCollapse = "collapse";
    $scope.fecharMenu = function (){
       var navMain = $("#menuCardapio");
       navMain.on("click", "a", null, function () {
           navMain.collapse('hide');
           javascript:void(0);
       });
    };

    $scope.ativaLabelFiltro = "label.filtroPlaced";
    $scope.ativaFiltro = function (){
      if(!($scope.ativaLabelFiltro === 'label.filtroPlaced')){
        $scope.ativaLabelFiltro = "label.filtroPlaced";
        $scope.filtro = ''
        document.getElementById('campoFiltroAtivo').blur();
      }else{
        $scope.ativaLabelFiltro = "label.ativaLabelFiltro";
        document.getElementById('campoFiltroAtivo').focus();
      }

      $scope.trocaLabelFiltro = function (){
        if(!($scope.ativaLabelFiltro === 'label.filtroPlaced')){
          $scope.filtro = ''
          $scope.ativaLabelFiltro = "label.filtroPlaced";
          document.getElementById('campoFiltroAtivo').blur();
        }
      }

    };

    $scope.data = {};

});
