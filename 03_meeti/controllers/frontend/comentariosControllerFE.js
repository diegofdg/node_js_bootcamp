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
    // Tomar el ID del comentario
    const { comentarioId } = req.body;

    // Consultar el Comentario
    const comentario = await Comentarios.findOne({ where : { id : comentarioId }});

    // verificar si existe el comentario
    if(!comentario) {
        res.status(404).send('Acción no válida');
        return next();
    }

    // verificiar que quien lo borra sea el creador
    if(comentario.usuarioId === req.user.id){        
        res.send('Eliminado Correctamente');
        return next();
    } else {
        res.send('Acción no válida');
        return next();
    }
}