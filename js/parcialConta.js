	var atualizaValor = document.querySelector("#subTotal");
	//Adquire e recalcula SubTotal.
	function subTotal(){

		atualizaValor.addEventListener("click", function(event){
			event.preventDefault();
			var valor = "10,00";

			if(atualizaValor.textContent == 0){
				atualizaValor.textContent = valor;
			}else{
				var aumenta = atualizaValor.textContent + valor;
				atualizaValor.textContent = aumenta;
			}
		});
}

function PrincipalController ($scope) {
	 $scope.subValor = [
		{subTotal: 0.00 }
	];
	$scope.imgLogo = [
		{img: 'aqui'}
	];
	console.log("aqui");
	$scope.calculaSubTotal = function (){

		if($scope.subValor.subTotal == 0.00 ){
			$scope.subValor.subTotal = 10.00;
		}else{
			$scope.subValor.subTotal++;
		}
		$scope.subValor.push({subTotal: $scope.subValor.subTotal});
	};



}
