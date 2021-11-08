import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css'
import { procesoPesado } from '../../helpers/procesoPesado'
export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    // si el counter quiero memorizar el nuevo resultado
    // es decir si el counter cambia necesito una nueva version memorizada de esa función

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button onClick={() => increment(1)} className="btn btn-primary m-2">+1</button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary">{show ? 'Show' : 'Hide'}</button>
        </div>
    )
}
