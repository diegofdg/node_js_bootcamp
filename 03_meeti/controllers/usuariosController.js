const Usuarios = require('../models/Usuarios');

exports.formCrearCuenta = async (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina : 'Crea tu Cuenta'
    });
};

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;
    
    const nuevoUsuario = await Usuarios.create(usuario);

    console.log(nuevoUsuario);

    
    
}