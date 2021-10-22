import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const sum = 2;
    const less = 2;

    const { state, increment, reset, decrement } = useCounter(10);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>

            <button className="btn btn-secondary" onClick={() => increment(sum)}>+{sum}</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
            <button className="btn btn-secondary" onClick={() => decrement(less)}>-{less}</button>
        </>
    )
}
