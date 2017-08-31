module.exports = function(app) {  
    app.get('/categoria', function(req, res) {
        var connection = app.infra.connectionFactory();

        var CategoriaDAO = new app.infra.CategoriaDAO(connection);
        CategoriaDAO.lista(function(err, results) {
        	res.json(results);
        });

        connection.end();
    });
}