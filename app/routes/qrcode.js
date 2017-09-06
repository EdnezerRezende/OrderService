
module.exports = function(app) {  

    app.post('/qrCode_obterid', function(req, res) {
        var dadosQrCode = req.body;

        var connection = app.infra.connectionFactory();

        var qrCodeDAO = new app.infra.QrCodeDAO(connection);

        qrCodeDAO.inserir(dadosQrCode, function(err, results) {
        	if(err) throw err;
                var dadosQrCode = req.body;

                var connection = app.infra.connectionFactory();

                var qrCodeDAO = new app.infra.QrCodeDAO(connection);

                qrCodeDAO.lista(dadosQrCode, function(err, results2) {
                    if(err) throw err;   
    	             res.json(results2);
                });

        });
            connection.end();
    });

    app.post('/qrCode_obterid/lista', function(req, res) {
        var dadosQrCode = req.body;

        var connection = app.infra.connectionFactory();

        var qrCodeDAO = new app.infra.QrCodeDAO(connection);

        qrCodeDAO.salva(dadosQrCode, function(err, results) {
            if(err) throw err;    
            res.json(results);
        });

        connection.end();
    });
}