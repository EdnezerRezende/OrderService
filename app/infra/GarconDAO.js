function GarconDAO(connection) {
    this._connection = connection;
}

GarconDAO.prototype.lista = function(callback) {
    this._connection.query('select * from garcon', callback);
}

module.exports = function(){
    return GarconDAO;
};