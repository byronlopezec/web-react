import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);


    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { loading, data } = useFetch(url);

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr />
            {loading ?
                <div className="alert alert-info text-center">
                    <strong>Loading...</strong>
                </div>
                :
                <blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <footer className="blockquote-footer mt-1">{author}</footer>
                </blockquote>
            }

            <button onClick={() => increment(1)} className="btn btn-primary">
                Siguiente
            </button>

        </div >
    )
}
