const Meeti = require('../../models/Meeti');
const Grupos = require('../../models/Grupos');
const Usuarios = require('../../models/Usuarios');
const moment = require('moment');
const Sequelize = require('sequelize');

exports.mostrarMeeti = async (req, res) => {
    const meeti = await Meeti.findOne({ 
        where : {
            slug : req.params.slug          
        }, 
        include : [
            { 
                model: Grupos
            }, 
            {
                model : Usuarios,
                attributes : ['id', 'nombre', 'imagen']
            }
        ]
    });

    // Si no existe
    if(!meeti) {
        res.redirect('/');
    }

    // pasar el resultado hacia la vista
    res.render('mostrar-meeti', {
        nombrePagina : meeti.titulo,
        meeti,
        moment
    });
}

// Confirma o cancela si el usuario asistirá al meeti
exports.confirmarAsistencia = async (req, res) => {
    Meeti.update(
        {'interesados' :  Sequelize.fn('array_append', Sequelize.col('interesados'), req.user.id  ) },
        {'where' : { 'slug' : req.params.slug }}
    );
    // mensaje
    res.send('Has confirmado tu asistencia');
}