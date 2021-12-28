import React from 'react'
// https://v5.reactrouter.com/web/guides/quick-start
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<HomeScreen />}></Route>
                        <Route path="/about" element={<AboutScreen />}></Route>
                        <Route path="/login" element={<LoginScreen />}></Route>
                        {/* <Route component={HomeScreen} /> */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
