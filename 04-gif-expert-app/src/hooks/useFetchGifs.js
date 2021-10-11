import { useEffect, useState } from "react";
import { dataGifAPI } from "../helpers/getGifs";

export const useFectchGifs = ({ category }) => {

    const [state, setState] = useState({data: [], loading: true});

    // se ejecuta solo una vez y no renderiza nuevamente todo el componente
    useEffect(() => {

        dataGifAPI({ category }).then((imgs => {
            setState({ data: imgs, loading: false });
        }));

    }, [category]);
    // add category becouse if category changes then useEffect needs to change

    return state;
}