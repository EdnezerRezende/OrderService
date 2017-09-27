function QrCodeDAO(connection) {
    this._connection = connection;
}

QrCodeDAO.prototype.inserir = function(dadosQrCode, callback) {
	const values = { 
		ident_empresa: dadosQrCode.empresa,
		ident_cliente: dadosQrCode.numeroQrCode
	}
	var sql = 'INSERT INTO qrcode (ident_empresa, ident_cliente) ';
	sql += ' SELECT ' + values.ident_empresa + ', "' + values.ident_cliente + '"';
	sql += ' FROM DUAL WHERE NOT EXISTS';
	sql += ' (SELECT q.ident_cliente FROM qrcode q WHERE q.ident_cliente = "' + values.ident_cliente + '") ';
    this._connection.query(sql, callback);
}
 
QrCodeDAO.prototype.lista = function(dadosQrCode, callback) {
	
	const values = {
		ident_empresa: dadosQrCode.empresa,
		ident_cliente: dadosQrCode.numeroQrCode
	}
	var sql = ' select idQrCode from qrcode where ident_cliente = "' + dadosQrCode.numeroQrCode+'"';
    this._connection.query(sql, callback);
}

module.exports = function(){
    return QrCodeDAO;
};