angular.module('selfservice').controller('PrincipalController', function($scope) {
	 $scope.subValor = [
		{subTotal: 10.00 }
	];

	$scope.calculaSubTotal = function (){
		console.log("aqui");
		if($scope.subValor.subTotal === 0.00 ){
			$scope.subValor.subTotal += 10.00;
		}else{
			$scope.subValor.subTotal++;
		}
		$scope.subValor.push({subTotal: $scope.subValor.subTotal});
	};



});
