import React, { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effect.css'

// Memo no funciona porque la función increment crea un nuevo objeto en memoria
// usamos entonces useCallback
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback((num) => {
        // no usamos counter porque counter si cambia y tenemos el mismo resultado
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
