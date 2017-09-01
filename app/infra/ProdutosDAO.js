function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
	
	var sql = 'select * from produto_servico';
    this._connection.query(sql, callback);
}

ProdutosDAO.prototype.buscaId = function(idProdutoServico, callback) {

	var sql = 'select * from produto_servico where idProdutoServico = ' + idProdutoServico;
    this._connection.query(sql, callback);
}

module.exports = function(){
    return ProdutosDAO;
};
