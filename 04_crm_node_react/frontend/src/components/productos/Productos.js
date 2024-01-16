import React, {useEffect, useState, useContext,  Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import clienteAxios from '../../config/axios';
import Spinner from '../layout/Spinner';
import Producto from './Producto';

// import el Context
import { CRMContext } from '../../context/CRMContext';

function Productos(props) {
    // productos = state, guardarproductos = funcion para guardar el state
    const [productos, guardarProductos] = useState([]);

    // utilizar valores del context
    // eslint-disable-next-line
    const [auth, guardarAuth ] = useContext( CRMContext );

    // useEffect para consultar api cuando cargue
    useEffect( () => {
        if(auth.token !== '') {
            // esto es necesario para cerrar la conexión a la api
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
    
            // query a la API
            const consultarAPI = async () => {
                try {
                    const productosConsulta = await clienteAxios.get('/productos', 
                    {
                        headers: {
                            Authorization : `Bearer ${auth.token}`
                        }
                    },
                    { 
                        cancelToken: source.token
                    });
                    // colocar el resultado en el state
                    guardarProductos(productosConsulta.data);
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
    }, [productos]);

    // Si el state esta como false
    if(!auth.auth) {
        props.history.push('/iniciar-sesion');
    }

    // spinner de carga
    if(!productos.length) return <Spinner /> 

    return (
        <Fragment>
            <h2>Productos</h2>

            <Link to={'/productos/nuevo'} className="btn btn-verde nvo-cliente"> 
                <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul className="listado-productos">
                {productos.map(producto => (
                    <Producto 
                        key={producto._id}
                        producto={producto}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default withRouter(Productos);