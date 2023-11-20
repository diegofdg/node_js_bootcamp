import express from "express";
import { body } from 'express-validator';
import { admin, crear, guardar } from '../controllers/propiedadController.js';

const router = express.Router();

router.get('/propiedades', admin);
router.get('/propiedades/crear', crear);
router.post('/propiedades/crear',
    body('titulo').notEmpty().withMessage('El Titulo del Anuncio es Obligatorio'),
    guardar);

export default router;