function FecharContaDAO(connection) {
	var strtotime = require('date-util');
    this._connection = connection;
} 
var moment = require('moment');

FecharContaDAO.prototype.salva = function(conta, callback) {

  var now = moment().format('YYYY-MM-DD HH:mm:ss');

  	const values = [
        {	
        	dataHoraPedidoFechamento: now,
       		statusPagamentoDinheiro: conta.opcaoDinheiro,
    			statusPagamentoCartao: conta.opcaoCredito,
    			statusPagamentoDebito:	conta.opcaoDebito,
    			statusPagamentoRefeicao:	conta.opcaoRefeicao,
    			observacaoPagamento: conta.restricao,
    			idCliente: conta.idCliente
       	}

      ];
	     
       var sql = 'insert into fechar_conta set ?';

    this._connection.query( sql, values, callback );
}



module.exports = function(){
    return FecharContaDAO;
};