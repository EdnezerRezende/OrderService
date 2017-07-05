angular.module('selfservice').controller('PrincipalController',  function($scope, $translate) {
	$scope.esconderBtnVoltar = true;
	// $scope.esconderImagemLogo = false;
	// valor SubTotal do menu superior.
	$scope.subValor =  100.00;


 $scope.emConstrucao = '../img/EmConstrucao.jpg';

	// $scope.calculaSubTotal = function (){
	// 	console.log("aqui");
	// 	if($scope.subValor.subTotal === 0.00 ){
	// 		$scope.subValor.subTotal += 10.00;
	// 	}else{
	// 		$scope.subValor.subTotal++;
	// 	}
	// 	$scope.subValor.push({subTotal: $scope.subValor.subTotal});
	// };

	$scope.changeLanguage = "";

	/* Esta função modifica o idioma do nosso app. */
	$scope.changeLanguage = function (locale){
		/* Define o novo idioma atual */
 		$translate.use(locale);

	};
	// function changeLanguage(locale) {
	// 	alert('Você selecionou o idioma: ' + locale);
	// }

});
