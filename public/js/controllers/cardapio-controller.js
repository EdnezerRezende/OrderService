angular.module('fazerumpedido').controller('CardapioController', function($scope, $stateParams, $rootScope, $window) {
    $rootScope.tituloPagina = "Cardapio";
    var ctrl = this;

    $scope.esconderCategoria = '';
    $scope.filtro = '';


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
