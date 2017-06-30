angular.module('minhasDiretivas',[])
.directive('backButton', function($apply){
  console.log("aqui");
      var ddo = {};
      ddo.restrict: 'AE',

      link: function(scope, element, attrs) {
        element.bind('click', goBack);

        function goBack() {
          history.back();
          scope.$apply();
        }
      }
      return ddo;

});
