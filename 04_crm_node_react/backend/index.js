const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// crear el servidor
const app = express();

// Rutas de la app
app.use('/', routes());

// puerto
app.listen(5000);