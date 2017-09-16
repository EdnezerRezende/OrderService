var mysql = require('mysql');

function createDBConnection(){
        /*return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            port : 3306,
            method: 'post',
            password : 'admin',
            database : 'fazerumpedido',
            headers: {
            	'Accept':'application/json',
            	'Content-type':'application/json'
            }

		});*/
        return mysql.createConnection({
            host : 'mysql.fazerumpedido.com.br',
            user : 'fazerumpedido',
            //port : 3306,
            method: 'post',
            password : 'risf1597532017',
            database : 'fazerumpedido',
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json'
            }

        });
}

module.exports = function() {
    return createDBConnection;
}