function GarconDAO(connection) {
    this._connection = connection;
}

GarconDAO.prototype.lista = function(callback) {

	var sql = 'select * from garcon';
    this._connection.query(sql, callback);
}

module.exports = function(){
    return GarconDAO;
};