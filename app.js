var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var user = require('./routes/user');
const admin = require('./routes/admin')

const thread = require('./model/database')
thread.sync({alter:true})

var app = express();

app.use(cors({
    origin: '*'
  }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/user', user);
app.use('/api/v1/admin',admin);


module.exports = app;
