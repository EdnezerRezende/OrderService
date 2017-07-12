angular.module('selfservice').controller('CardapioController', function($scope, $stateParams, $rootScope) {

    var ctrl = this;
    // $scope.cardapio = PedidoModel.All;

    $scope.esconderCategoria = '';
    $scope.filtro = '';

    $rootScope.enviarItem = function (item){
      var i = 0;
      var a = false;
      var id = item.id;
      while(i < $rootScope.cardapio.length && a === false){
        if($rootScope.cardapio[i].id === id){
          a= true;
          $rootScope.pedido = $rootScope.cardapio[i];
        }else {
          i++;
        }
      }
      // if(i < $rootScope.cardapio.length){
      //   window.sessionStorage.setItem('pedido', JSON.stringify($rootScope.cardapio[i]));
      // }else{
      //   alert('Item não encontrado');
      // }

    };
    $scope.fechaMenu = 'true';
    $scope.vlrCollapse = "collapse";
    $scope.fecharMenu = function (){
      if($scope.fechaMenu === 'true'){
         $scope.vlrCollapse = "collapse";
          $scope.fechaMenu='false';
      }
    };
    // function getCardapio() {
    //        // Para carregar os usuarios usando o service
    //        PedidoModel.all()
    //          .then(function(response) {
    //            ctrl.cardapio = response;
    //
    //          })
    //          .catch(function(error) {
    //            console.log("Erro carregando Cardápio");
    //            console.log(error);
    //          });
    //      }
    //
    //      // Carrega todo Cardápio
    //      getCardapio();


});
