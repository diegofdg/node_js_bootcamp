const express = require('express');

// Crear la app
const app = express();

// Routing
app.get('/', function(req, res) {
    res.send('Hola Mundo en express!!!');
});

app.get('/nosotros', function(req, res) {
    res.json({msg: 'Información de Nosotros'});
});

// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});