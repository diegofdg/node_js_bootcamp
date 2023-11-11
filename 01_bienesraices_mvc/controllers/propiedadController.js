const admin = async (req, res) => {
    res.render('propiedades/admin', {
        pagina: 'Mis Propiedades'
    });    
}

export {
    admin
}