angular.module('selfservice')
.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {

    'label.filtroPlaced': 'Filter desired product',
    'label.tituloFecharConta': 'Account Closing',
    'label.tituloAcompanhar': 'Order Tracking',
    'label.tituloChamarGarcom': 'Call the waiter'

  });

  $translateProvider.translations('pt', {
    'label.filtroPlaced': 'Filtrar produto desejado',
    'label.tituloFecharConta': 'Fechamento de Conta',
    'label.tituloAcompanhar': 'Acompanhamento de Pedido',
    'label.tituloChamarGarcom': 'Chamar Garçom'
  });

  $translateProvider.translations('es', {
    'label.filtroPlaced': 'Filtrar producto deseado',
    'label.tituloFecharConta': 'Cierre de cuenta',
    'label.tituloAcompanhar': 'Seguimiento de pedidos',
    'label.tituloChamarGarcom': 'Llamar a Garçón'

  });

  $translateProvider.useSanitizeValueStrategy('escape');

  $translateProvider.preferredLanguage('pt'); //Linguagem default.

}]);
