require('./config/config');
const express = require('express'),
      mongoose = require('mongoose');

const routes = require('./routes/router');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

app.use(express.static(__dirname + '/../client/public'));

app.use(routes);

module.exports = app;