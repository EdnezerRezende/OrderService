var express = require('express');
var strtotime = require('date-util');
var load = require('express-load');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');
var moment = require('moment');


module.exports = function() {
    var app = express();
        
    app.use(history());
    app.set('secret', 'seosenhornaoguardaratorreemvaovigiaasentinela'); 
    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/public');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	load('routes/auth.js', {cwd: 'app'})
        .then('routes')
        .then('infra')
        .into(app);

     return app;
}

