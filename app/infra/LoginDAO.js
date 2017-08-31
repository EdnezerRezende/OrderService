function LoginDAO(connection) {
	var strtotime = require('date-util');
    this._connection = connection;
}

LoginDAO.prototype.findOne = function(usuario, callback) {
  	const login = usuario.login.toString();
    const senha = usuario.senha.toString();
      var sql = 'select idCliente from usuario where login = ? and senha = ? ' ;
    this._connection.query(sql, [login, senha], callback);

}


module.exports = function(){
    return LoginDAO;
};