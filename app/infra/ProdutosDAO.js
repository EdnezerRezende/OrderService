function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from produto_servico', callback);
}

ProdutosDAO.prototype.buscaId = function(idProdutoServico, callback) {
	var sql = 'select * from produto_servico where idProdutoServico = ' + idProdutoServico;
    this._connection.query(sql, callback);
}

module.exports = function(){
    return ProdutosDAO;
};
