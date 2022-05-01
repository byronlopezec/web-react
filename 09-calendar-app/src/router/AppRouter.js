
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CalendarScreen } from './../components/calendar/CalendarScreen';
import { LoginScreen } from './../components/auth/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from './../components/actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const { checking, uid } = useSelector(state => state.auth)
    const uidExist = !!uid;

    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch])

    if (checking) {
        return <h5>Cargando...</h5>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute isAuthenticated={uidExist}>
                        <CalendarScreen />
                    </PrivateRoute>
                } />
                <Route path="login" element={
                    <PublicRoute isAuthenticated={uidExist} >
                        <LoginScreen />
                    </PublicRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}
