import React from 'react'

// increment es una función que usa un useState que en cada llamada crea una
// nuevo espacio de memoria y el react.memo no trabaja como queremos
// por ello se usa useCallback 
export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar');

    return (
        <button className="btn btn-primary"
            onClick={() => { increment(5) }}
        >Incrementar</button>
    )
})
