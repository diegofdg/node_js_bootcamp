const Meeti = require('../../models/Meeti');
const Grupos = require('../../models/Grupos');
const Usuarios = require('../../models/Usuarios');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');

exports.resultadosBusqueda = async (req, res) => {
   
    // leer datos de la url 
    
    const { categoria, titulo, ciudad, pais } = req.query;

    // filtrar los meetis por los terminos de busqueda
    const meetis = await Meeti.findAll({ 
        where :  { 

        }
    });
}