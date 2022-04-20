
import React from 'react'

export const Navbar = () => {
    return (

        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                Brandom
            </span>

            <button type="button" className="btn btn-outline-danger me-2">
                <i className="fa fa-sign-out me-2" />
                <span>Salir</span>
            </button>

        </div>
    )
}