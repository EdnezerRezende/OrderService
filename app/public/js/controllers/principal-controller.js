angular.module('fazerumpedido').controller('PrincipalController', function($scope, $rootScope, $stateParams, $state, $translate, $location) {


	$rootScope.tituloPagina = "";
	$rootScope.esconderBtnVoltar = true;


	$rootScope.changeLanguage = "";

	/* Esta função modifica o idioma. */
	$rootScope.changeLanguage = function (locale){
		/* Define o novo idioma atual */
 		$translate.use(locale);
	};


});
