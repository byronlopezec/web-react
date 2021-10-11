import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='item-card animate__fadeIn'>
            <img alt={title} src={url}></img>
            <p>{title}</p>
        </div>
    )
}
