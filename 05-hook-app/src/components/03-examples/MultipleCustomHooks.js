import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';

export const MultipleCustomHooks = () => {

    const data = useFetch('https://www.breakingbadapi.com/api/quotes/1');

    return (
        <div>
            <h1>Multiple Custom Hookss</h1>
            {JSON.stringify(data)}
        </div>
    )
}
