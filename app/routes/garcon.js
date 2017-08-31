
module.exports = function(app) {  
    app.get('/garcon', function(req, res) {
        var connection = app.infra.connectionFactory();

        var garconDAO = new app.infra.GarconDAO(connection);
        garconDAO.lista(function(err, results) {
        	res.json(results);
        });

        connection.end();
    });
}