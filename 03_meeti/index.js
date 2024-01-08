const express = require('express');
const router = require('./routes');

require('dotenv').config();

const app = express();

// Routing
app.use('/', router());

app.listen(process.env.PORT, () => {
    console.log('El servidor está funcionando')
})