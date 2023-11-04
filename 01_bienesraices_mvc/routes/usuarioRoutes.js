import express from "express";

const router = express.Router();

router.get('/', function(req, res) {
    res.send('Hola Mundo en express!!!');
});

router.get('/nosotros', function(req, res) {
    res.json({msg: 'Información de Nosotros'});
});

export default router;