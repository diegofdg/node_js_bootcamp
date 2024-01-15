import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import clienteAxios from '../../config/axios';
import Spinner from '../layout/Spinner';
import Producto from './Producto';

function Productos(props) {
    // productos = state, guardarproductos = funcion para guardar el state
    const [productos, guardarProductos] = useState([]);

    // useEffect para consultar api cuando cargue
    useEffect( () => {
        // esto es necesario para cerrar la conexión a la api
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        // query a la API
        const consultarAPI = async () => {
            try {
                const productosConsulta = await clienteAxios.get('/productos', {
                    cancelToken: source.token
                });
                // colocar el resultado en el state
                guardarProductos(productosConsulta.data);
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
    }, [productos]);

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
export default Productos;