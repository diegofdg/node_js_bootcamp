import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";

const router = express.Router();

router.get('/', formularioLogin);

export default router;