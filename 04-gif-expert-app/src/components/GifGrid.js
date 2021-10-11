import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFectchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFectchGifs({ category });

    return (

        <>
            <h2>{category}</h2>
            {loading && <p>Cargando...</p>}

            <div className="card-grid animate__fadeIn">
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
