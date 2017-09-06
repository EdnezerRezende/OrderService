function LocalizacaoDAO(connection) {
    this._connection = connection;
}

LocalizacaoDAO.prototype.lista = function(callback) {

	var sql = 'select * from localizacao';
    this._connection.query(sql, callback);
}

module.exports = function(){
    return LocalizacaoDAO;
};