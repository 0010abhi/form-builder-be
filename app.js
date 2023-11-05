var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const db = require("./model");

var fieldTypeRouter = require('./routes/field-type.route');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

try {
    db.sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }


app.use('/api/field-type', fieldTypeRouter);

module.exports = app;
