import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send({msg: 'Hola Mundo en express!!!'});
});

router.post('/', (req, res) => {
    res.json({msg: 'Respuesta de tipo post'});
});

export default router;