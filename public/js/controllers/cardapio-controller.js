angular.module('fazerumpedido').controller('CardapioController', function($scope, $stateParams, $rootScope) {
    $rootScope.tituloPagina = "Cardapio";
    var ctrl = this;

    $scope.esconderCategoria = '';
    $scope.filtro = '';

    $rootScope.enviarItem = function (item){
      var i = 0;
      var a = false;
      var id = item.id;
      while(i < $rootScope.cardapio.length && a === false){
        if($rootScope.cardapio[i].id === id){
          a= true;
          $rootScope.detalharCardapio = $rootScope.cardapio[i];
        }else {
          i++;
        }
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
        document.getElementById('campoFiltroAtivo').blur();
      }else{
        $scope.ativaLabelFiltro = "label.ativaLabelFiltro";
        document.getElementById('campoFiltroAtivo').focus();
      }

    };



});
