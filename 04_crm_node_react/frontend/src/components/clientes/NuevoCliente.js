import React, { Fragment, useState } from 'react';
import clienteAxios from '../../config/axios';

function NuevoCliente(){
    // cliente = state, guardarcliente = funcion para guardar el state
    const[cliente, guardarCliente] = useState({
        nombre: '',
        apellido: '',
        empresa : '',
        email: '',
        telefono :''
    });

    // leer los datos del formulario
    const actualizarState = e => {
        // Almacenar lo que el usuario escribe en el state
        guardarCliente({
            // obtener una copia del state actual
            ...cliente, 
            [e.target.name] : e.target.value
        });
    }

    // Añade en la REST API un cliente nuevo
    const agregarCliente = e => {
        e.preventDefault();

        // enviar petición
        clienteAxios.post('/clientes', cliente)
            .then(res => {
                // validar si hay errores de mongo 
                if(res.data.code === 11000) {
                    console.log('Error de duplicado de mongo');
                } else {
                    console.log(res.data);
                }
                // Redireccionar
            });
    }

    // Validar el formulario
    const validarCliente = () => {
        // Destructuring
        const { nombre, apellido, email, empresa, telefono } = cliente;

        // revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        // return true o false
        return valido;
    }

    return (
        <Fragment>
            <h2>Nuevo Cliente</h2>
            <form
                onSubmit={agregarCliente}
            >
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text" 
                        placeholder="Nombre Cliente" 
                        name="nombre"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        type="text" 
                        placeholder="Apellido Cliente" 
                        name="apellido"
                        onChange={actualizarState}
                    />
                </div>
            
                <div className="campo">
                    <label>Empresa:</label>
                    <input
                        type="text" 
                        placeholder="Empresa Cliente" 
                        name="empresa"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input
                        type="email" 
                        placeholder="Email Cliente" 
                        name="email"
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input
                        type="tel" 
                        placeholder="Teléfono Cliente" 
                        name="telefono"
                        onChange={actualizarState}
                    />
                </div>

                <div className="enviar">
                    <input 
                        type="submit" 
                        className="btn btn-azul" 
                        value="Agregar Cliente"
                        disabled={ validarCliente() }
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default NuevoCliente;