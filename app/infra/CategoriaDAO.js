function CategoriaDAO(connection) {
    this._connection = connection;
}

CategoriaDAO.prototype.lista = function(callback) {
    this._connection.query('select * from categoria', callback);
}

module.exports = function(){
    return CategoriaDAO;
};