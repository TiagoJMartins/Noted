var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var http = require('http').Server(app);
var dbUrl = 'mongodb://admin:password@ds013911.mlab.com:13911/noted';

mongoose.connect(dbUrl, function() {
  console.log('Connected to remote database...');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'wowthisissosecret',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

require('./app/routes.js')(app);

http.listen(8080, function() {
  console.log('Server listening...');
});
