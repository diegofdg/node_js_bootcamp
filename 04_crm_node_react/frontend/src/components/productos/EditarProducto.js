import React, {useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
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

    // archivo = state, guardarArchivo = setState
    const [archivo, guardarArchivo] = useState('');

    useEffect( () => {
        // esto es necesario para cerrar la conexión a la api
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        // query a la API
        const consultarAPI = async () => {
            try {
                const productoConsulta = await clienteAxios.get(`/productos/${id}`, {
                    cancelToken: source.token
                });
                // colocar el resultado en el state
                guardarProducto(productoConsulta.data);
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
    }, [id]);

    // Edita un Producto en la base de datos
    const editarProducto = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('nombre', producto.nombre);
        formData.append('precio', producto.precio);
        formData.append('imagen', archivo);

        // almacenarlo en la BD
        try {
            const res = await clienteAxios.put(`/productos/${id}`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            } );

            // Lanzar una alerta
            if(res.status === 200) {
                Swal.fire(
                    'Editado Correctamente',
                    res.data.mensaje,
                    'success'
                )
            }

            // redireccionar
            props.history.push('/productos');

        } catch (error) {
            console.log(error);
            // lanzar alerta
            Swal.fire({
                type:'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            })
        }
    }

    // leer los datos del formulario
    const leerInformacionProducto = e => {
        guardarProducto({
            // obtener una copia del state y agregar el nuevo
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    // coloca la imagen en el state
    const leerArchivo = e => {
        guardarArchivo( e.target.files[0] );
    }

    // extraer los valores del state
    const { nombre, precio, imagen } = producto;

    if(!nombre) return <Spinner />

    return (
        <Fragment>
            <h2>Editar Producto</h2>

            <form
                onSubmit={editarProducto}
            >
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        placeholder="Nombre Producto" 
                        name="nombre"
                        onChange={leerInformacionProducto}
                        defaultValue={nombre}
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
                        onChange={leerInformacionProducto}
                        defaultValue={precio}
                    />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    { imagen ? (
                        <img src={`http://localhost:5000/${imagen}`} alt="imagen" width="300" />
                    ) : null }
                    <input 
                        type="file"  
                        name="imagen"
                        onChange={leerArchivo}
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