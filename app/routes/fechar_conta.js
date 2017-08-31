module.exports = function(app) {  
    app.post('/fechar_conta', function(req, res) {
    	var conta = req.body;

        var connection = app.infra.connectionFactory();
        var fecharContaDAO = new app.infra.FecharContaDAO(connection);

        fecharContaDAO.salva(conta, function(err, results) {
        	if(err) throw err;
            res.json(results);
        });

        connection.end();
    });
    
}