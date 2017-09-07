
module.exports = function(app) {  

    app.post('/garcon_chamado', function(req, res) {
        //var identificacaoGarcom = req.params.idGarcon;
        var garcon = req.body;

        var connection = app.infra.connectionFactory();

        var garconChamadoDAO = new app.infra.GarconChamadoDAO(connection);
        garconChamadoDAO.salva(garcon, function(err, results) {
        	if(err) throw err;
        	res.json(results);
        });

        connection.end();
    });
}