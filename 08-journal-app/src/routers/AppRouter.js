import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from '../reducers/PrivateRoute';
import { PublicRoute } from './../reducers/PublicRoute';
import { startLoadingNotes } from './../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);
    const [isLogginIn, setIsLogginIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(getAuth(), async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogginIn(true);

                dispatch(startLoadingNotes(user.uid));

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
                <Route path="/" element={

                    <PrivateRoute isAuthenticated={isLogginIn}>
                        <JournalScreen />
                    </PrivateRoute>

                } />
                <Route path="/auth/*" element={
                    <PublicRoute isAuthenticated={isLogginIn}>
                        <AuthRouter />
                    </PublicRoute>
                } />
                <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
