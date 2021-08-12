import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {


    const [count, setCount] = useState(0);

    useEffect(() => {
        dataGifAPI();
    }, [])

    const dataGifAPI = async () => {
        const api_key = 'IeSlcE9JlBLhzpNlK7PPFQHfkvcg0mjY';
        const resp = await fetch('https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=' + api_key);
        const { data } = await resp.json()

        const dataCatagories = data.map((item) => {
            return {
                id: item.id,
                title: item.title,
                url: item.images?.downsized_medium.url,

            }
        })
        console.log(dataCatagories);
    }

    return (
        <div>
            <h2>{category}</h2>
            <h3>{count}</h3>
            <button onClick={() => { setCount(c => c + 1) }}></button>

        </div>
    )
}

GifGrid.propTypes = {
    categories: PropTypes.array
}

export default GifGrid
