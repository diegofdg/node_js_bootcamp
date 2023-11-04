import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';  

// Crear la app
const app = express();

// Routing
app.use('/', usuarioRoutes);

// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});