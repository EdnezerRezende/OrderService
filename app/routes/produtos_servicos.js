
module.exports = function(app) {
    app.get('/cardapio_servico', function(req, res) {
        var connection = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
        	if(err) throw err;
        	res.json(results);
        });

        connection.end();
    });

    app.get('/cardapio_servico/:idProdutoServico', function(req, res) {
    	var idProdutoServico = req.params.idProdutoServico;

    	console.log(req.params);
        var connection = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.buscaId(idProdutoServico, function(err, results) {
        	if(err) throw err;
        	res.json(results);
        });

        connection.end();
    });

}