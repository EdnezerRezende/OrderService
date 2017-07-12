angular.module('selfservice').controller('FazerPedidoController', function($scope, $stateParams, $rootScope){

  $rootScope.pedido.quantidade = 1;
  $scope.btnDiminuir = function(){
    if($rootScope.pedido.quantidade > 0){
      var guarda = $rootScope.pedido.quantidade;
      guarda = guarda - 1;
      $rootScope.pedido.quantidade = guarda;
    }
  };

  $scope.btnAumentar = function(){
    if($rootScope.pedido.quantidade >= 0){
      var guarda = $rootScope.pedido.quantidade;
      guarda = guarda + 1;
      $rootScope.pedido.quantidade = guarda;
    }
  };

  $('.img-responsive').on( "click", function() {
    $(this).animate({
    width:'100%',
    height:'100%'
    });
    });

$('.img-responsive').mouseout(function() {
    $(this).animate({
    width:'50%',
    height:'50%'
    });
    });

});
