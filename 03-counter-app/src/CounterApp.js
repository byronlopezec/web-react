import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 100 }) => {

    // const handleAdd = (e) => console.log(e);
    const handleAdd = (e) => console.log(e);

    const handleAdd2 = (e) => {

        console.log('contenido funcion handleadd2() se ejecutar al renderizar elementos del componente')

        return (e) => {
            console.log(e);
        }
    }

    const [counter, setCounter] = useState(0); // retorna un array [], HOOK es una funcion q permite conectarse a caracteristicas de react

    const handleAdd3 = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    // Ejercicio restart resetear y sumar
    const [count, setCount] = useState(value);

    const handleSubtract = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(value);
    }
    const handlePlus = () => {
        setCount(count + 1);
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h1  >{counter}</h1>
            <button onClick={handleAdd3}> +1  </button>
            <button onClick={handleAdd}> +3 </button>
            <button onClick={handleAdd2()}> +2 </button>
            <br />
            <h1>Ejercicio count</h1>
            <h1 id="idCounter">{count}</h1>
            <button id="btnPlus" onClick={handlePlus}> +1  </button>
            <button id="btnReset" onClick={handleReset}> Reset  </button>
            <button id="btnSubtract" onClick={handleSubtract}> -1  </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
