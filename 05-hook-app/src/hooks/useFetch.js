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

                setTimeout(() => {

                    if (isMounted.current) {
                        setState({
                            data,
                            loading: false,
                            error: null
                        })
                    }else{
                        console.log("Se previno el setState")
                    }
                }, 4000);
            })
    }, [url])

    return state;

}
