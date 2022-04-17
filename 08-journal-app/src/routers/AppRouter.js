import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }
        })
    }, [dispatch])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<JournalScreen />} />
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
