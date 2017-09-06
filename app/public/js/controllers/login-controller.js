angular.module('fazerumpedido').controller('LoginController', function($window, $scope, $rootScope, $http, $location, $ngBootbox) {
	 
   $rootScope.tituloPaginaLogin = "Login";

    $scope.usuario = {};
    $scope.mensagem = '';
    $scope.qtdTentativas = 0;
    $scope.ativaLoginManual = false;
    $scope.labelButtonAtivarLogin = 'Ativa Login Manual';
    $scope.cameraRequested = true;
    $scope.cameraIsOn = true;

    $scope.processURLfromQR = function (url) {
      $scope.url = url;
      $scope.cameraRequested = false;
      $scope.cameraIsOn = false;
      var userQrCode = $scope.url;
      $scope.usuario.login = userQrCode.substr(0, userQrCode.indexOf(':'));
      $scope.usuario.senha = userQrCode.substr(userQrCode.indexOf(':')+1);
      $scope.autenticar();
    }

    $scope.onError = function(error) {
        if($scope.qtdTentativas > 2){
            $scope.ativaLoginManual = true;
        }
        $scope.qtdTentativas++;
    };

    if($rootScope.temPedido){
        $ngBootbox.alert({message: "Não encontramos seu acesso. Para continuar, é necessário validar seu Login", title: "Ops!"})
       .then(function() {
          $scope.mensagem = "";
          $scope.titleMensagem = "";
        });

        //$scope.mensagem = "Não encontramos seu acesso. Para continuar, é necessário validar seu Login";
    }else{
        $scope.mensagem = '';
    }

    $scope.autenticar = function() {

        var usuario = $scope.usuario;
        
      if (!( usuario.senha.substr(usuario.senha.indexOf('=')) === '=' )  ){
        
        if(usuario.login.length && usuario.senha.length){

            $http.post('/autenticar', {login: usuario.login, senha: usuario.senha})
            .then(function(success) {
                if($rootScope.temPedido){
                   $rootScope.temPedido = false;
                    var tratar = success.data;
                    var idtratado = tratar.idCliente;
                   $rootScope.idCliente = idtratado;

                   $ngBootbox.alert({message: "Login feito com sucesso, pode concluir o seu Pedido!", title: "Sucesso!"})
                   .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                    });

                   $location.path('/pedido'); 
                }else{
                   var tratar = success.data;
                   var idtratado = tratar.idCliente;
                   $rootScope.idCliente = idtratado;
                   $location.path('/acompanhamento');
                   $ngBootbox.alert({message: "Login feito com sucesso!", title: "Sucesso!"})
                   .then(function() {
                      $scope.mensagem = "";
                      $scope.titleMensagem = "";
                    });
                }

            }, function(erro) {
                $scope.usuario = {};
                //$scope.mensagem = 'Login/Senha incorretos';
                $ngBootbox.alert({message: "Login/Senha incorretos", title: "Ops!"})
               .then(function() {
                  $scope.mensagem = "";
                  $scope.titleMensagem = "";
                });
                $scope.cameraRequested = true;
                $scope.cameraIsOn = true;
            });
        }else{
            $ngBootbox.alert({message: "Digite um login/Senha ou Utilize o QRCode", title: "Ops!"})
           .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
            });
            //$scope.mensagem = 'Digite um login/Senha ou Utilize o QRCode';
        }
      }else{
             $ngBootbox.alert({message: "A Senha digitada é inválida, tente novamente!", title: "Ops!"})
           .then(function() {
              $scope.mensagem = "";
              $scope.titleMensagem = "";
            });
      }
    };

    $scope.ativarDesativarLoginManual = function(){
      if ($scope.labelButtonAtivarLogin === 'Ativa Login Manual'){
          $scope.ativaLoginManual = true;
          $scope.labelButtonAtivarLogin = 'Desativar Login Manual';
      }else{
          $scope.ativaLoginManual = false;
          $scope.labelButtonAtivarLogin = 'Ativa Login Manual';
      }

    }
    $scope.cancelar = function(){
      $scope.cameraRequested = false;
      $scope.cameraIsOn = false;
        if ($window.localMediaStream) {
            console.log($window);
          $window.localMediaStream.active = false;
          $window.localMediaStream = null;
        }        
        $location.path('/pedido');
    }
  
});
