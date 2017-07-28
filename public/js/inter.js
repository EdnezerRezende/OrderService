angular.module('fazerumpedido')
.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {

    'label.filtroPlaced': 'Filter desired product',
    'label.tituloPagina': 'Menu',
    'label.tituloFecharConta': 'Account Closing',
    'label.tituloAcompanhar': 'Order Tracking',
    'label.tituloChamarGarcom': 'Call the waiter',
    'label.titulo': 'Title',
    'label.descricao': 'Description',
    'label.valor': 'Value',
    'label.observacao': 'Note',
    'label.quantidade': 'Amount',
    'label.voltar': 'Come back',
    'label.enviar': 'CONFIRM',
    'Cardapio': 'Menu',
    'Pedido': 'Order'

  });

  $translateProvider.translations('pt', {
    'label.filtroPlaced': 'CARDÁPIO',
    'label.tituloPagina': 'Cardápio',
    'label.tituloFecharConta': 'Fechamento de Conta',
    'label.tituloAcompanhar': 'Acompanhamento de Pedido',
    'label.tituloChamarGarcom': 'Chamar Garçom',
    'label.titulo': 'Título',
    'label.descricao': 'Descrição',
    'label.valor': 'Valor',
    'label.observacao': 'Observação',
    'label.quantidade': 'Quantidade',
    'label.voltar': 'Voltar',
    'label.enviar': 'CONFIRMAR',
    'Cardapio': 'Cardápio',
    'Pedido': 'Pedido'
  });

  $translateProvider.translations('es', {
    'label.filtroPlaced': 'Filtrar producto deseado',
    'label.tituloPagina': 'Menú',
    'label.tituloFecharConta': 'Cierre de cuenta',
    'label.tituloAcompanhar': 'Seguimiento de pedidos',
    'label.tituloChamarGarcom': 'Llamar a Garçón',
    'label.titulo': 'Título',
    'label.descricao': 'Descripción',
    'label.valor': 'Valoraciones',
    'label.observacao': 'Observación',
    'label.quantidade': 'Cantidad',
    'label.voltar': 'Volver',
    'label.enviar': 'CONFIRMAR',
    'Cardapio': 'Menú',
    'Pedido': 'Solicitud'

  });

  $translateProvider.useSanitizeValueStrategy('escape');

  $translateProvider.preferredLanguage('pt'); //Linguagem default.

}]);
