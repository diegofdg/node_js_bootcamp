import React, {Fragment, useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'; 
import clienteAxios from '../../config/axios';

function EditarCliente(props){

    // obtener el ID
    const { id } = props.match.params;

    // cliente = state, datosCliente = funcion para guardar el state
    const[cliente, datosCliente] = useState({
        nombre: '',
        apellido: '',
        empresa : '',
        email: '',
        telefono :''
    });

    // Query a la API
    const consultarAPI = async () => {
        const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);

       // colocar en el state
       datosCliente(clienteConsulta.data);
    }

    // useEffect, cuando el componente carga
    useEffect( () => {
        consultarAPI();
    }, []);

    // leer los datos del formulario
    const actualizarState = e => {
        // Almacenar lo que el usuario escribe en el state
        datosCliente({
            // obtener una copia del state actual
            ...cliente, 
            [e.target.name] : e.target.value
        })
    }

    // Validar el formulario
    const validarCliente = () => {
        // Destructuring
        const { nombre, apellido, email, empresa, telefono} = cliente;

        // revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        // return true o false
        return valido;
    }

    return (
        <Fragment>
            <h2>Editar Cliente</h2>
            
            <form>
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input  type="text" 
                            placeholder="Nombre Cliente" 
                            name="nombre"
                            value={cliente.nombre}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" 
                          placeholder="Apellido Cliente" 
                          name="apellido" 
                          value={cliente.apellido}
                    />
                </div>
            
                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" 
                          placeholder="Empresa Cliente" 
                          name="empresa" 
                          value={cliente.empresa}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" 
                            placeholder="Email Cliente" 
                            name="email" 
                            value={cliente.email}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="tel" 
                        placeholder="Teléfono Cliente" 
                        name="telefono" 
                        value={cliente.telefono}
                    />
                </div>

                <div className="enviar">
                    <input 
                        type="submit" 
                        className="btn btn-azul" 
                        value="Guardar Cambios" 
                        disabled={ validarCliente() }
                    />
                </div>
            </form>
        </Fragment>
    )
}

// HOC, es una función que toma un componente y retorna un nuevo componente
export default  withRouter(EditarCliente);