import React, {useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';
import Spinner from '../layout/Spinner';

function EditarProductos(props) {

    // obtener el ID
    const { id } = props.match.params;

    // producto = state, y funcion para actualizar
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: '',
        imagen : ''
    });

    // cuando el componente carga
    useEffect(() => {
         // consultar la api para traer el producto a editar
        const consultarAPI = async () => {
            const productoConsulta = await clienteAxios.get(`/productos/${id}`);
            guardarProducto(productoConsulta.data);
            console.log(producto);
        }

        consultarAPI();
    }, [])
    
    return (
        <Fragment>
            <h2>Editar Producto</h2>

            <form>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        placeholder="Nombre Producto" 
                        name="nombre"
                    />
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input 
                        type="number" 
                        name="precio" 
                        min="0.00" 
                        step="0.01" 
                        placeholder="Precio"
                    />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    <img src="" alt="imagen" width="300" />
                    
                    <input 
                        type="file"  
                        name="imagen"
                    />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Editar Producto" />
                </div>
            </form>
        </Fragment>
    )
}
export default withRouter(EditarProductos);