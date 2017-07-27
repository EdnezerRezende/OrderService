angular.module('fazerumpedido').controller('ChamarGarcomController', function($scope) {

  $scope.alerta = function(){
      var config = {};
      growl.success("<b>Mensagem de Sucesso</b>", config);
      growl.info("Mensagem Info", config);
      growl.warning("Mensagem Alerta", config);
      growl.error("Mensagem Erro :(", config);
   }
});
