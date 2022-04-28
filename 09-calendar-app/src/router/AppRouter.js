
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CalendarScreen } from './../components/calendar/CalendarScreen';
import { LoginScreen } from './../components/auth/LoginScreen';
import { useDispatch } from 'react-redux';
import { startChecking } from './../components/actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CalendarScreen />} />
                <Route path="login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
