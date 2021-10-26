import { useState } from 'react'
import { useEffect } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({ error: null, data: '', loading: true, })


    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then((data) => {

                setState({
                    data,
                    loading: false,
                    error: null
                })
            })
    }, [url])

    return state;

}
