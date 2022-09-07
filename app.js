var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser')

var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({origin: ['http://localhost:3000']}));
app.use('/admins', adminRouter);
app.use('/users', usersRouter);

module.exports = app;
