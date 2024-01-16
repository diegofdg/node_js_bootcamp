import React from 'react';

function DetallesPedido() {

    return(
        <li class="pedido">
            <div class="info-pedido">
                <p class="id">ID: 0192019201291201</p>
                <p class="nombre">Cliente: Juan Pablo De la torre</p>

                <div class="articulos-pedido">
                    <p class="productos">Artículos Pedido: </p>
                    <ul>
                        <li>
                            <p>Macbook Pro</p>
                            <p>Precio: $3000</p>
                            <p>Cantidad: 4</p>
                        </li>
                        <li>
                            <p>Macbook Pro</p>
                            <p>Precio: $3000</p>
                            <p>Cantidad: 4</p>
                        </li>
                    </ul>
                </div>
                <p class="total">Total: $3,500 </p>
            </div>
            <div class="acciones">
                <button type="button" class="btn btn-rojo btn-eliminar">
                    <i class="fas fa-times"></i>
                    Eliminar Pedido
                </button>
            </div>
        </li>
    )
}

export default DetallesPedido;