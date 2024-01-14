const Comentarios = require('../../models/Comentarios');

exports.agregarComentario = async (req, res, next) => {
    // obtener el comentario
    const { comentario } = req.body;

    // crear comentario en la BD
    await Comentarios.create({
        mensaje : comentario,
        usuarioId : req.user.id,
        meetiId : req.params.id
    });

    // Redireccionar a la misma pagina
    res.redirect('back');
    next();
}

// elimina un comentario de la base de datos
exports.eliminarComentario = async (req, res, next ) => {
    res.send('Se eliminó...');
}