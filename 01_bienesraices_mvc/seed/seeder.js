import { exit } from 'node:process';
import categorias from './categorias.js';
import db from '../config/db.js';
import Categoria from '../models/Categoria.js';

const importarDatos = async () => {
    try {
        // Autenticar 
        await db.authenticate();

        // Generar las Columnas
        await db.sync();

        // Insertamos los datos
        await Categoria.bulkCreate(categorias);

        console.log('Datos Importados Correctamente');
        exit();
        
    } catch (error) {
        console.log(error);
        exit(1);
    }
}

if(process.argv[2] === "-i") {
    importarDatos();
}