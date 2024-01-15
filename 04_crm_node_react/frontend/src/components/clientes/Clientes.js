import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Cliente from './Cliente';

// importar cliente axios
import axios from 'axios';
import clienteAxios from '../../config/axios';

function Clientes() {
    // Trabajar con el state
    // clientes = state,  guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    // useEffect para consultar api cuando cargue
    useEffect( () => {
        // esto es necesario para cerrar la conexión a la api
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        // query a la API
        const consultarAPI = async () => {
            try {
                const clientesConsulta = await clienteAxios.get('/clientes', {
                    cancelToken: source.token
                });
                // colocar el resultado en el state
                guardarClientes(clientesConsulta.data);
            } catch (error) {
                if (!axios.isCancel(error)) {                    
                    throw error;
                }
            }
        }; 
        consultarAPI();

        // una vez hecha la consulta, se cierra la conexión 
        return () => {
            source.cancel();
        };
    }, [clientes]);








    if(!clientes.length) return <Spinner /> 

    return (
        <Fragment>        
            <h2>Clientes</h2>
            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente"> 
                <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>
            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente 
                        key={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
export default Clientes;