import React, { useEffect, useState, Fragment } from 'react';

// importar cliente axios
import clienteAxios from '../../config/axios';

function Clientes() {
    // Trabajar con el state
    // clientes = state,  guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    // query a la API
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');
        // colocar el resultado en el state
        guardarClientes(clientesConsulta.data);
    }

    // use effect es similar a componentdidmount y willmount
    useEffect( () => {
        consultarAPI();        
    }, [] );

    return (
        <Fragment>        
            <h2>Clientes</h2>
            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    console.log(cliente)
                ))}
            </ul>
        </Fragment>
    )
}
export default Clientes;