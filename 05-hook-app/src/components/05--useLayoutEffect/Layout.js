import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import { useCounter } from '../../hooks/useCounter'
import { useState } from 'react/cjs/react.development';

export const Layout = () => {

    const { counter, increment } = useCounter(1);


    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data } = useFetch(url);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});


    useLayoutEffect(() => {
        // obtener las dimensiones de <p>{quotes}</p>
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">{quote}</p>
            </blockquote>

            <pre>{JSON.stringify(boxSize,null,3)}</pre>

            <button onClick={() => increment(1)} className="btn btn-primary">
                Siguiente
            </button>

        </div >
    )
}
