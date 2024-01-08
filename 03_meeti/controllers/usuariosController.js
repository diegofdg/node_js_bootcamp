const Usuarios = require('../models/Usuarios');

exports.formCrearCuenta = async (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina : 'Crea tu Cuenta'
    });
};

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;

    try {
        const nuevoUsuario = await Usuarios.create(usuario);
    
        console.log(nuevoUsuario);        
    } catch (error) {
        console.log(error);
        // extraer el message de los errores
        const erroresSequelize = error.errors.map(err => err.message);

        req.flash('error', erroresSequelize);
        res.redirect('/crear-cuenta');
    }    
}