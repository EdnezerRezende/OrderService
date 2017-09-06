
module.exports = function(app) {  
    app.get('/localizacao', function(req, res) {
        var connection = app.infra.connectionFactory();

        var localizacaoDAO = new app.infra.LocalizacaoDAO(connection);
        localizacaoDAO.lista(function(err, results) {
        	if(err) throw err;
        	res.json(results);
        });
 
        connection.end();
    });


}