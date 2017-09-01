function GarconChamadoDAO(connection) {
    this._connection = connection;
}
var moment = require('moment');

GarconChamadoDAO.prototype.salva = function(identificacaoGarcom, callback) {

 var now = moment().format('YYYY-MM-DD HH:mm:ss');

	const values = [
      {	
      	dataHoraChamadoMesa: now,
     	idGarcon: identificacaoGarcom
      }
    ];
	    
   var sql = 'insert into garcon_chamado set ?';

   this._connection.query(sql, values, callback);

}

module.exports = function(){
    return GarconChamadoDAO;
};