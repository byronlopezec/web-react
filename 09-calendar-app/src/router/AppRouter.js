
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CalendarScreen } from './../components/calendar/CalendarScreen';
import { LoginScreen } from './../components/auth/LoginScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CalendarScreen />} />
                <Route path="login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
