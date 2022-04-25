

import React from 'react'
import { useDispatch } from 'react-redux';
import { eventDelete } from './../actions/events';

export const DeleteDeventFab = () => {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(eventDelete())
    }

    return (
        <button
            onClick={handleDelete}
            className='btn btn-danger fab-danger'
        >
            <i className='fas fa-trash' />
            <span>Borrar evento</span>
        </button>
    )
}
