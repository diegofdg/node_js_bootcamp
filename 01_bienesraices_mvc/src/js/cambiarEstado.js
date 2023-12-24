(function() {
    const cambiarEstadoBotones = document.querySelectorAll('.cambiar-estado');
    
    cambiarEstadoBotones.forEach( boton => {
        boton.addEventListener('click', cambiarEstadoPropiedad);
    } )


    async function cambiarEstadoPropiedad(e) {
        const { propiedadId: id } = e.target.dataset

        console.log(id);
       
    }
})()