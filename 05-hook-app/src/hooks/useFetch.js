import { useRef, useState } from 'react'
import { useEffect } from 'react'

export const useFetch = (url) => {

    //Controlar que el componente está montado o no
    const isMounted = useRef(true);
    const [state, setState] = useState({ error: null, data: '', loading: true, })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            data: '', error: null, loading: true
        })

        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    })
                }
            }).catch(error => {

                setState({
                    data: '',
                    loading: false,
                    error: 'No se pudo cargar la info'
                })

            })
    }, [url])

    return state;

}
