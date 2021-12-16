import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link exact="true" activeclassname="active" className="nav-item nav-link" to="/">Home</Link>
                        <Link exact="true" activeclassname="active" className="nav-item nav-link" to="/about">About</Link>
                        <Link exact="true" activeclassname="active" className="nav-item nav-link" to="/login">Login</Link>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
