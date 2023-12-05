const inicio = async (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}    

const categoria = async (req, res) => {
    
}

const noEncontrado = (req, res) => {

}

const buscador = async (req, res) => {
    
}

export {
    inicio,
    categoria,
    noEncontrado,
    buscador
}