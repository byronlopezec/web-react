import React, { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One-Punch', 'Dragon-Ball', 'Doraemon']);

    const handleAdd = (e) => {
        // setCategories([...categories, 'Mazinger-Z']);
        setCategories(cats => [...cats, 'Mazinger-Z']); // puede recibir un callback 
    }
    return (
        <>
            <h2>Git Expert App</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}  </li>;
                    })
                }
            </ol>
        </>
    )
}
