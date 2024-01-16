import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Cliente from './Cliente';

// importar cliente axios
import axios from 'axios';
import clienteAxios from '../../config/axios';

// import el Context
import { CRMContext } from '../../context/CRMContext';

function Clientes(props) {
    // Trabajar con el state
    // clientes = state,  guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    // utilizar valores del context
    // eslint-disable-next-line
    const [auth, guardarAuth ] = useContext( CRMContext );

    // useEffect para consultar api cuando cargue
    useEffect( () => {        
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        if(auth.token !== '') {
            // esto es necesario para cerrar la conexión a la api
            // query a la API
            const consultarAPI = async () => {
                try {
                    const clientesConsulta = await clienteAxios.get('/clientes', 
                    {
                        headers: {
                            Authorization : `Bearer ${auth.token}`
                        }
                    },
                    { 
                        cancelToken: source.token
                    });
                    // colocar el resultado en el state
                    guardarClientes(clientesConsulta.data);
                    
                } catch (error) {
                    if (!axios.isCancel(error)) {                    
                        throw error;
                    } else if (error.response.status === 500) {
                        props.history.push('/iniciar-sesion');
                    } 
                }
            }; 
            consultarAPI();
            // una vez hecha la consulta, se cierra la conexión 
            return () => {
                source.cancel();
            };
            
        } else {
            props.history.push('/iniciar-sesion');
        }
        
    // eslint-disable-next-line
    }, [clientes]);

    // Si el state esta como false
    if(!auth.auth) {
        props.history.push('/iniciar-sesion');
    }

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
export default withRouter(Clientes);