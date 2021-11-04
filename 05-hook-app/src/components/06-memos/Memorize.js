import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css'
import { SmallMemo } from './SmallMemo';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);


    return (
        <div>
            <h1>Counter <SmallMemo value={counter} /></h1>
            <hr />

            <button onClick={() => increment(1)} className="btn btn-primary mr-2">+1</button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary ml-5">Show/hide{show}</button>
        </div>
    )
}
