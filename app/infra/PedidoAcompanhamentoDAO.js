function PedidoAcompanhamentoDAO(connection) {
	var strtotime = require('date-util');
    this._connection = connection;
}
var moment = require('moment');

PedidoAcompanhamentoDAO.prototype.lista = function(usuario, callback) {
    //StatusImpressao = 6 é Conta Fechada e 5 é Produto Entregue
    
    var sql = 'select pedido.*, ';
    sql += '        (SELECT subPedido.sub_titulo from pedido_servico_sub subPedido ';
    sql += '        where subPedido.idPedidoServicoSub = pedido.idPedidoServicoSub) as sub_titulo,  ';
    sql += '        (SELECT subPedido.sub_valor from pedido_servico_sub subPedido ';
    sql += '        where subPedido.idPedidoServicoSub = pedido.idPedidoServicoSub) as sub_valor, ';
    sql += '        produto.*';
    sql += ' from pedido_acompanhamento as pedido join produto_servico  as produto ';
    sql += ' on pedido.idProdutoServico = produto.idProdutoServico ';
    sql += ' where pedido.idQrCode =  ' + usuario;
    sql += ' and pedido.statusImpressao != 6  ';

    
    this._connection.query(sql, usuario, callback);
}

PedidoAcompanhamentoDAO.prototype.atualiza = function(idItemPedido, callback) {

     var sql = 'update pedido_acompanhamento join produto_servico ';
    sql += ' on pedido_acompanhamento.idProdutoServico = produto_servico.idProdutoServico ';
    sql += ' set pedido_acompanhamento.pedidoAtrasado = true ';
    sql += ' where pedido_acompanhamento.idPedido = ? ';

    this._connection.query(sql, idItemPedido, callback);
}

PedidoAcompanhamentoDAO.prototype.atualizaItens = function(idQrCode, callback) {
    //StatusImpressao = 6 é Conta Fechada
    var sql = 'update pedido_acompanhamento join produto_servico ';
    sql += ' on pedido_acompanhamento.idProdutoServico = produto_servico.idProdutoServico ';
    sql += ' set pedido_acompanhamento.statusImpressao = 6 ';
    sql += ' where pedido_acompanhamento.idQrCode = ? ';
    
    this._connection.query(sql, idQrCode, callback);
}


PedidoAcompanhamentoDAO.prototype.deleta = function(identificacao, callback) {
    var sql = 'delete from pedido_acompanhamento where pedido_acompanhamento.idPedido = ' + identificacao ;
    this._connection.query(sql, callback);
}

PedidoAcompanhamentoDAO.prototype.salva = function(pedido, callback) {

 var now = moment().format('YYYY-MM-DD HH:mm:ss');

  //var tpreparo = moment().add(pedido.tempoPreparo.substr(3,2), 'm').format('YYYY-MM-DD HH:mm:ss');
  var tpreparo = new Date();
	const values = [
      {	
      	dataHoraStatusAcompanhamentoPedido: now,
     		idQrCode: pedido.idQrCode,
  			idProdutoServico: pedido.idProdutoServico,
  			restricao:	pedido.restricao,
  			quantidade:	pedido.quantidade,
  			statusDescricao: pedido.statusDescricao,
  			statusImpressao: pedido.statusImpressao,
        dataHoraPrevisaoEntrega: tpreparo,
        idLocalizacao: pedido.idLocalizacao,
        idPedidoServicoSub: pedido.idPedidoServicoSub
     	}

    ];
   var sql = 'insert into pedido_acompanhamento set ?';

   this._connection.query(sql, values, callback);
}

module.exports = function(){
    return PedidoAcompanhamentoDAO;
};