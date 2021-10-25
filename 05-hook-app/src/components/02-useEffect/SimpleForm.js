import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import './effect.css'

export const SimpleForm = () => {

    // useEffect
    // Es un hook que permite ejecutar un efecto secundario cuando algo uscede en nuestro componente

    const [form, setForm] = useState({ name: '', email: '' });

    const { name, email } = form;

    // use effect se ejecutar en cada cambio del componente
    // si deseamos ejecutar una sola vez,
    // entonces colocamos en el arreglo de dependencias de use effect un arreglo vacío []

    useEffect(() => {
        console.log('Hey!!!')
    }, []);

    //ejecutamos algo cuando el form cambia!!!...
    useEffect(() => {
        console.log('Form Cambió')
    }, [form])

    // Podemos ejecutar algo cuando email cambia
    useEffect(() => {
        console.log('Email Cambio')

    }, [email])

    const handleInputChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

        </>
    )
}
