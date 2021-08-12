import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        dataGifAPI();
    }, [])

    const dataGifAPI = async () => {
        const api_key = 'IeSlcE9JlBLhzpNlK7PPFQHfkvcg0mjY';
        const resp = await fetch('https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=' + api_key);
        const { data } = await resp.json()

        const imgs = data.map((item) => {
            return {
                id: item.id,
                title: item.title,
                url: item.images?.downsized_medium.url,

            }
        })
        setImages(imgs);
    }

    return (
        <div>
            <h2>{category}</h2>
            {
                images.map((img) => <GifGridItem key={img.id} {...img} />) // pasamos todos las propiedades incluido img
            }
        </div>
    )
}

GifGrid.propTypes = {
    categories: PropTypes.array
}

export default GifGrid
