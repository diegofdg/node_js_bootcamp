const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const router = require('./routes');

require('dotenv').config();

const app = express();

// Habilitar EJS como template engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Ubicación vistas
app.set('views', path.join(__dirname, './views'));

// archivos staticos
app.use(express.static('public'));

// Routing
app.use('/', router());

app.listen(process.env.PORT, () => {
    console.log('El servidor está funcionando')
})