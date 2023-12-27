exports.formularioNuevaVacante = async (req, res, next) => {
    res.render('nueva-vacante', {
        nombrePagina : 'Nueva Vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    });
}