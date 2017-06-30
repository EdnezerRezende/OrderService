angular.module('selfservice').controller('PrincipalController',  function($scope) {
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



});
