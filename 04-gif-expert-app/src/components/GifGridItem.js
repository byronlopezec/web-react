import React from 'react'

import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='item-card animate__fadeIn'>
            <img alt={title} src={url}></img>
            <p>{title}</p>
        </div>
    )
}


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}