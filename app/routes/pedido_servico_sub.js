
module.exports = function(app) {
    app.get('/pedido_servico_sub', function(req, res) {
        var connection = app.infra.connectionFactory();

        var pedidoServicoSubDAO = new app.infra.PedidoServicoSubDAO(connection);

        pedidoServicoSubDAO.lista(function(err, results) {
        	if(err) throw err;
        	res.json(results);
        });

        connection.end();
    });
    
}