import { useContext } from 'react';
import { AuthContext } from './../auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    const { pathname, search } = useLocation();
    localStorage.setItem('lastPath', pathname + search)

    return user.logged ? children : <Navigate to="/login" />
}