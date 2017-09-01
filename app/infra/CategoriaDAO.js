function CategoriaDAO(connection) {
    this._connection = connection;
}

CategoriaDAO.prototype.lista = function(callback) {
	var sql = 'select * from categoria';
    this._connection.query(sql, callback);
}

module.exports = function(){
    return CategoriaDAO;
};