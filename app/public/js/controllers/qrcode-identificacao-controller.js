angular.module('fazerumpedido').controller('QrCodeIdentificacaoController', function($scope, $stateParams, $rootScope, $window, $ngBootbox, $http, $location){
    

  $scope.ativaLoginManual = false;
  $scope.labelButtonAtivarLogin = 'Ativa Login Manual';
 

   //$scope.login = 0;
   $scope.continue = false;
   //$rootScope.qrcode = {};

    $scope.cameraRequested = true;
    $scope.cameraIsOn = true;

    $scope.processURLfromQR = function (url) {
      $scope.url = url;
      $scope.cameraRequested = false;
      $scope.cameraIsOn = false;
      var userQrCode = $scope.url;
      $scope.qrcode = {};
      $scope.qrcode.empresa = userQrCode.substr(0, userQrCode.indexOf(','));
      $scope.qrcode.numeroQrCode = userQrCode.substr(userQrCode.indexOf(',')+1);
      $scope.inserirQrCodeManual();
    }

  $scope.onError = function(error) {
      if($scope.qtdTentativas > 2){
          $scope.ativaLoginManual = true;
      }
      $scope.qtdTentativas++;
  };

  $scope.ativarDesativarLoginManual = function(){
      if ($scope.labelButtonAtivarLogin === 'Ativa Login Manual'){
          $scope.cameraRequested = false;
          $scope.cameraIsOn = false;
          $scope.ativaLoginManual = true;
          $scope.labelButtonAtivarLogin = 'Desativar Login Manual';
      }else{
          $scope.cameraRequested = true;
          $scope.cameraIsOn = true;
          $scope.ativaLoginManual = false;
          $scope.labelButtonAtivarLogin = 'Ativa Login Manual';
      }

    }

  

});