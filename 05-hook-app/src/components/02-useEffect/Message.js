import React, { useState } from 'react'
import { useEffect } from 'react'

export const Message = ({ initialState = { x: 0, y: 0 } }) => {

    const [coors, setCoors] = useState(initialState);

    useEffect(() => {


        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCoors(coors)
        }

        // PREVENIR consumo de memoria
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h1>Eres Genial!!</h1>
            <p>{JSON.stringify(coors)}</p>
        </div>
    )
}
