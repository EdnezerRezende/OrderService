angular.module('fazerumpedido')
.controller('AcompanharPedidoController', function($scope, $rootScope, $window, $filter, $ngBootbox, $location, $http) {
    $rootScope.tituloPagina2 = "label.tituloAcompanhar";
    $rootScope.acompanhamentos = [];
    $scope.mostra = false;
    var now = new Date(); 
    
    $scope.login = 1;


    $scope.horaAtual = now;
    $scope.contagem = 0;
    
    $scope.btnCancelar = function (item){
      var indice = $rootScope.acompanhamentos.indexOf(item);
      $http({
        method: 'DELETE',
        url: '/pedido_acompanhamento/' + item.idPedido
      })
      .then(function (success) {
        $rootScope.acompanhamentos.splice(indice, 1);
        if(!$rootScope.acompanhamentos.length){
         $ngBootbox.alert({message: "Não constam solicitações pendentes", title: ""})
              .then(function() {
                  $rootScope.mensagem = "";
                  $rootScope.titleMensagem = "";
                  $location.path('/cardapio');
              });
        }else{
          $ngBootbox.alert({message: "Pedido Excluído.", title: "Sucesso"})
            .then(function() {
                $scope.mensagem = "";
                $scope.titleMensagem = "";
                $scope.login = 0;
            });
        }
      }, function(error){
        console.log("Erro: " + error);
      });

    };

    $scope.btnAlertar = function (item){
      var idPedido = item.idPedido;
      
      $http({
        method: 'PUT',
        url: '/pedido_acompanhamento/' + idPedido,
      })
      .then(function (success) {
         $ngBootbox.alert({message: "Avisamos a Central sobre a demora do Pedido", title: "Aguarde"})
          .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
              $scope.login = 0;
          });
      }, function(error){
        $ngBootbox.alert({message: "Não conseguimos avisar a Central, tente novamente mais tarde!", title: "Ops!"})
          .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
              $scope.login = 0;
          });
        console.log("Erro: " + error);
      });

    };

    $scope.calcularTempoPedido = function(item){
      var calculoPrevisao = new Date(item.dataHoraPrevisaoEntrega);
        
        var a =  new Date();
        var b = new Date(item.dataHoraPrevisaoEntrega); 
        var diff = a - b;
         
        var segundos = Math.round( diff / 1000 );
        var minutos = Math.round( ( diff / 1000 ) / 60 );
        var horas = Math.round( ( ( diff / 1000 ) / 60 ) / 60 );
        var dias = Math.round( ( ( ( diff / 1000 ) / 60 ) / 60 ) / 24 );
        var calculo = "";
        var tratarMinutos = 0;
        item.atraso = false;
        if(minutos > 0){
          item.atraso = true;
          if(minutos>59){
              tratarMinutos = (minutos - (horas * 60));
            if(horas > 9){
              item.tratarTempo = horas + ":" + tratarMinutos;
            }else{
              item.tratarTempo = "0" + horas + ":" + tratarMinutos;
            }
          }else {
            if( minutos < 10 ) {
              item.tratarTempo = "00" + ":" + "0" + minutos;
            }else{
              item.tratarTempo = "00" + ":" + minutos;
            }
          }
        }
        item.tempoAtraso = calculoPrevisao.getTime() - $scope.horaAtual.getTime() ;
    };
});
