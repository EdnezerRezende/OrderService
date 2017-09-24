function QrCodeDAO(connection) {
    this._connection = connection;
}

QrCodeDAO.prototype.inserir = function(dadosQrCode, callback) {
	const values = { 
		ident_empresa: dadosQrCode.empresa,
		ident_cliente: dadosQrCode.numeroQrCode
	}
	var sql = 'INSERT INTO qrcode (ident_empresa, ident_cliente) ';
	sql += ' SELECT ' + dadosQrCode.empresa + ', ' + dadosQrCode.numeroQrCode;
	sql += ' FROM DUAL WHERE NOT EXISTS';
	sql += ' (SELECT ident_cliente FROM qrcode WHERE ident_cliente = ' + dadosQrCode.numeroQrCode + ') ';

    this._connection.query(sql, callback);
}

QrCodeDAO.prototype.lista = function(dadosQrCode, callback) {
	
	const values = {
		ident_empresa: dadosQrCode.empresa,
		ident_cliente: dadosQrCode.numeroQrCode
	}
	var sql = ' select idQrCode from qrcode where ident_cliente = ' + dadosQrCode.numeroQrCode;
    this._connection.query(sql, callback);
}

module.exports = function(){
    return QrCodeDAO;
};