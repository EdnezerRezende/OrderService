function GarconChamadoDAO(connection) {
    this._connection = connection;
}
var moment = require('moment');

GarconChamadoDAO.prototype.salva = function(garcon, callback) {
 var now = moment().format('YYYY-MM-DD HH:mm:ss');

	const values = [ 
      {	
      	dataHoraChamadoMesa: now,
       	idGarcon: garcon.idGarcon,
        idLocalizacao: garcon.idLocalizacao,
        idQrCode: garcon.idQrCode
      }
    ];
	    
   var sql = 'insert into garcon_chamado set ?';

   this._connection.query(sql, values, callback);

}

module.exports = function(){
    return GarconChamadoDAO;
};