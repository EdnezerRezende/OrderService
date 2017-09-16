function PedidoServicoSubDAO(connection) {
    this._connection = connection;
}

PedidoServicoSubDAO.prototype.lista = function(callback) {
	
	var sql = 'select * from pedido_servico_sub p ';
    this._connection.query(sql, callback);
}



module.exports = function(){
    return PedidoServicoSubDAO;
};