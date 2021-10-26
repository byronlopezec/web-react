import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref);

    const handleClick = () => {
        // document.querySelector('input').select();
        // document.querySelector('input').focus();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                ref={inputRef}
                className="form-control" placeholder="Su nombre"></input>
            <button className="btn btn-primary mt-5"
                onClick={handleClick}
            >Focus</button>
        </div>
    )
}
