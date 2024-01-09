const Usuarios = require('../models/Usuarios');

exports.formCrearCuenta = async (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina : 'Crea tu Cuenta'
    });
};

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;

    req.checkBody('confirmar', 'El password confirmado no puede ir vacio' ).notEmpty();
    req.checkBody('confirmar', 'El password es diferente').equals(req.body.password);

    // Leer los errores de express
    const erroresExpress = req.validationErrors();

    try {
        const usuarioRegistrado = await Usuarios.findOne({ where: { email: usuario.email }})
        if(usuarioRegistrado) {
            req.flash('error', 'Usuario ya registrado');
            return res.redirect('/crear-cuenta');
        }

        const nuevoUsuario = await Usuarios.create(usuario);
    
        console.log(nuevoUsuario);        
    } catch (error) {
        console.log(error);
        // extraer el message de los errores
        const erroresSequelize = error.errors.map(err => err.message);

        // extraer unicamente el msg de los errores
        const errExp = erroresExpress.map(err => err.msg);

        //unirlos
        const listaErrores = [...erroresSequelize, ...errExp];

        req.flash('error', listaErrores);
        res.redirect('/crear-cuenta');
    }    
}