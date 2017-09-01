
module.exports = function(app) {  

    app.post('/garcon_chamado/:idGarcon', function(req, res) {
        var identificacaoGarcom = req.params.idGarcon;

        var connection = app.infra.connectionFactory();

        var garconChamadoDAO = new app.infra.GarconChamadoDAO(connection);
        garconChamadoDAO.salva(identificacaoGarcom, function(err, results) {
        	if(err) throw err;
        	res.json(results);
        });

        connection.end();
    });
}