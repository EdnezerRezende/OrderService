angular.module('fazerumpedido').controller('AcompanharPedidoController', function($scope, $rootScope, $window, $timeout) {

    $rootScope.tituloPagina2 = "label.tituloAcompanhar";

    $scope.btnCancelar = function (item){
      var index = $scope.acompanhamentos.indexOf(item);
      $scope.acompanhamentos.splice(index, 1);
    };

    $scope.tratarHorario = [];
    $scope.contagens = [];
    $scope.habilitarBotaoTempo = true;

    $scope.tempoPercorrido = function (item){
      $scope.contagens[item.id];
      $scope.contagens.push(item.tempo);
      // $scope.tratarHorario.id = item.id;
      // $scope.tratarHorario.count = item.tempo;
      // console.log($scope.tratarHorario);
      // var horas = new Date().getHours();
      // var minutos = new Date().getMinutes();
      // var calcHoras = horas * 60;
      // var calcMinutos = minutos * 60;
      // var result = calcHoras + calcMinutos;
      // var horasPedido = tempoPedido;
      // console.log(horasPedido);
    };

});
