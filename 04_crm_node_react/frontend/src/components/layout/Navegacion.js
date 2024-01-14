import React from 'react';

const Navegacion = () => {
    return ( 
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <a href="index.html" class="clientes">Clientes</a>
                <a href="productos.html" class="productos">Productos</a>
                <a href="pedidos.html" class="pedidos">Pedidos</a>
            </nav>
        </aside>
     );
}
 
export default Navegacion;