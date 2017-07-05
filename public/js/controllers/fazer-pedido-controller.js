angular.module('selfservice').controller('FazerPedidoController', function($scope, $routeParams){
  $scope.pedido = {};


  $scope.enviarItem = function (item){
    $scope.pedido = item;
    console.log($scope.pedido);
  };


});
