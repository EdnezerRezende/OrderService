angular.module('fazerumpedido').controller('ChamarGarcomController', function($scope, $stateParams, $rootScope, $http) {

  $rootScope.tituloPagina4 = "garcons";
  $scope.counter = 0;


  $http({
      method: 'GET',
      url: '/garcon'
    })
    .then(function (success) {
        $rootScope.garcons = success.data;
    }, function(error){
      $log.error(err);
    });

});
