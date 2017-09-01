function PedidoAcompanhamentoDAO(connection) {
	var strtotime = require('date-util');
    this._connection = connection;
}
var moment = require('moment');

PedidoAcompanhamentoDAO.prototype.lista = function(usuario, callback) {

    var sql = 'select * from pedido_acompanhamento join produto_servico ';
    sql += ' on  pedido_acompanhamento.idProdutoServico = produto_servico.idProdutoServico ';
    sql += 'where pedido_acompanhamento.idCliente = ? ';
    sql += 'and pedido_acompanhamento.statusImpressao != 5 ';

    /*
    var sql = 'select * from pedido_acompanhamento, produto_servico ';
    sql += 'where pedido_acompanhamento.idCliente = ? ';
    sql += 'and pedido_acompanhamento.statusImpressao != 5 ';
    */sql += 'and pedido_acompanhamento.idProdutoServico = produto_servico.idProdutoServico';
    
    this._connection.query(sql, usuario, callback);
}

PedidoAcompanhamentoDAO.prototype.atualiza = function(idItemPedido, callback) {

     var sql = 'update pedido_acompanhamento join produto_servico ';
    sql += ' on pedido_acompanhamento.idProdutoServico = produto_servico.idProdutoServico ';
    sql += ' set pedido_acompanhamento.pedidoAtrasado = true ';
    sql += ' where pedido_acompanhamento.idPedido = ? ';

    this._connection.query(sql, idItemPedido, callback);
}

PedidoAcompanhamentoDAO.prototype.atualizaItens = function(idCliente, callback) {

    var sql = 'update pedido_acompanhamento join produto_servico ';
    sql += ' on pedido_acompanhamento.idProdutoServico = produto_servico.idProdutoServico ';
    sql += ' set pedido_acompanhamento.statusImpressao = 5 ';
    sql += ' where pedido_acompanhamento.idCliente = ? ';
    
    this._connection.query(sql, idCliente, callback);
}


PedidoAcompanhamentoDAO.prototype.deleta = function(identificacao, callback) {
    var sql = 'delete from pedido_acompanhamento where pedido_acompanhamento.idPedido = ' + identificacao ;
    this._connection.query(sql, callback);
}

PedidoAcompanhamentoDAO.prototype.salva = function(pedido, callback) {

 var now = moment().format('YYYY-MM-DD HH:mm:ss');

 var tpreparo = moment().add(pedido.tempoPreparo.substr(3,2), 'm').format('YYYY-MM-DD HH:mm:ss');

	const values = [
      {	
      	dataHoraStatusAcompanhamentoPedido: now,
     		idCliente: pedido.idCliente,
  			idProdutoServico: pedido.idProdutoServico,
  			restricao:	pedido.restricao,
  			quantidade:	pedido.quantidade,
  			statusDescricao: pedido.statusDescricao,
  			statusImpressao: pedido.statusImpressao,
        dataHoraPrevisaoEntrega: tpreparo
     	}

    ];
	    
   var sql = 'insert into pedido_acompanhamento set ?';

   this._connection.query(sql, values, callback);
}

module.exports = function(){
    return PedidoAcompanhamentoDAO;
};