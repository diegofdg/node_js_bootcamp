import React, { useEffect, Fragment } from 'react';

// importar cliente axios
import clienteAxios from '../../config/axios';

function Clientes() {
    // query a la API
    const consultarAPI = async () => {
        const clienteConsulta = await clienteAxios.get('/clientes');
        console.log(clienteConsulta);
    }

    // use effect es similar a componentdidmount y willmount
    useEffect( () => {
        consultarAPI();        
    }, [] );

    return (
        <Fragment>        
            <h2>Clientes</h2>
        </Fragment>
    )
}
export default Clientes;