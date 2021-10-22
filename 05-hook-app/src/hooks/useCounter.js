import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [state, setstate] = useState(initialState)

    const reset = () => {
        setstate(initialState);
    }
    const increment = (factor = 1) => {
        setstate(state + factor);
    }

    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    return {
        state,
        reset,
        increment,
        decrement
    }
}
