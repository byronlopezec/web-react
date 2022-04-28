
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Navbar = () => {

    const { name } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }
    
    return (

        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                {name}
            </span>

            <button type="button" className="btn btn-outline-danger me-2"
                onClick={handleLogout}
            >
                <i className="fa fa-sign-out me-2" />
                <span>Salir</span>
            </button>

        </div>
    )
}