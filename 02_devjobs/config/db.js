const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect( process.env.DB_URL, { useNewUrlParser: true });
mongoose.connection.on('error', (error) => {
    console.log(error);
});

// importar los modelos
require('../models/Vacantes');
require('../models/Usuarios');