import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { dataGifAPI } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    // se ejecuta solo una vez y no renderiza nuevamente todo el componente
    useEffect(() => {

        dataGifAPI({ category }).then((imgs => { 
            setImages(imgs);
        }));
    }, [category]);
// add category becouse if category changes then useEffect needs to change

    return (

        <>
            <h2>{category}</h2>
            <div className="card-grid">
                {
                    images.map((img) => <GifGridItem key={img.id} {...img} />) // pasamos todos las propiedades incluido img
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categories: PropTypes.array
}

export default GifGrid
