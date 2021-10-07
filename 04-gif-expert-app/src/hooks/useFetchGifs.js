import { useState } from "react/cjs/react.development"

export const useFectchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {

        setState({
            data: [1, 2, 3, 4, 5, 6],
            loading: false
        })
    },3000)

    return state;
}