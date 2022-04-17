import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);
    const [isLogginIn, setIsLogginIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogginIn(true);
            } else {
                setIsLogginIn(false);
            }

            setCheking(false);
        })
    }, [dispatch, setCheking, isLogginIn])


    if (checking) {
        return <div>Checking...</div>
    }


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
