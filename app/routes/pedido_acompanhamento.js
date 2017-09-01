module.exports = function(app) {   
   
      app.get('/pedido_acompanhamento/:idCliente', function(req, res) {

        var usuario = req.params.idCliente;
        var connection = app.infra.connectionFactory();
        var pedidoAcompanhamentoDAO = new app.infra.PedidoAcompanhamentoDAO(connection);
  
        pedidoAcompanhamentoDAO.lista(usuario, function(err, results) {
            if(err) throw err;
            res.json(results);
        });

        connection.end();

    });

    app.put('/pedido_acompanhamento/:idPedido', function(req, res) {

        var idItemPedido = req.params.idPedido;
        var connection = app.infra.connectionFactory();
        var pedidoAcompanhamentoDAO = new app.infra.PedidoAcompanhamentoDAO(connection);

        pedidoAcompanhamentoDAO.atualiza(idItemPedido, function(err, results) {
            if(err) throw err;
            res.json(results);
        });

        connection.end();

    });  

     app.put('/pedido_acompanhamento/fechar_itens/:idCliente', function(req, res) {

        var idCliente = req.params.idCliente;
        var connection = app.infra.connectionFactory();
        var pedidoAcompanhamentoDAO = new app.infra.PedidoAcompanhamentoDAO(connection);

        pedidoAcompanhamentoDAO.atualizaItens(idCliente, function(err, results) {
            if(err) throw err;
            res.json(results);
        });

        connection.end();

    });  

    app.post('/pedido_acompanhamento', function(req, res) {
    	var pedido = req.body;

        var connection = app.infra.connectionFactory();
        var pedidoAcompanhamentoDAO = new app.infra.PedidoAcompanhamentoDAO(connection);

        pedidoAcompanhamentoDAO.salva(pedido, function(err, results) {
            if(err) throw err; 
            res.json(results.id);
        });


        connection.end();

    });

    app.delete('/pedido_acompanhamento/:item', function(req, res) {
        var identificacao = req.params.item;

        var connection = app.infra.connectionFactory();
        var pedidoAcompanhamentoDAO = new app.infra.PedidoAcompanhamentoDAO(connection);

        pedidoAcompanhamentoDAO.deleta(identificacao, function(err, results) {
            if(err) throw err;
            res.json(results.id);
        });

        connection.end();
    });

  
}