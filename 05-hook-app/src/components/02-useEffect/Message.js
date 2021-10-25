import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Componente montado')
        return () => {
            console.log('Componente desmontado')
        }
    }, [])

    return (
        <div>
            <h1>Eres Genial!!</h1>
        </div>
    )
}
