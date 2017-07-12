angular.module('selfservice').controller('PrincipalController', function($scope, $rootScope, $stateParams, $state, $translate, $location) {
	// $scope.esconderBtnVoltar = true;
	// $scope.esconderImagemLogo = false;
	// valor SubTotal do menu superior.
	// $scope.subValor =  100.00;

	$rootScope.esconderBtnVoltar = true;

  $rootScope.emConstrucao = '../img/EmConstrucao.jpg';

	$rootScope.changeLanguage = "";

	/* Esta função modifica o idioma. */
	$rootScope.changeLanguage = function (locale){
		/* Define o novo idioma atual */
 		$translate.use(locale);
	};


});
