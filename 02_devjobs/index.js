const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('Hola Mundo!!!');
});

app.listen(5000);