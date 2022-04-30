import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = ({ defaultCatagories = [] }) => {

    const [categories, setCategories] = useState(defaultCatagories);

    // const handleAdd = (e) => {
    //     // setCategories([...categories, 'Mazinger-Z']);
    //     setCategories(cats => [...cats, 'Mazinger-Z']); // puede recibir un callback 
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((category) =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ol>


        </>
    )
}
