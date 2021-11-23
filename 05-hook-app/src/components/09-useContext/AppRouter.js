import React from 'react'
// https://v5.reactrouter.com/web/guides/quick-start
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/about" element={<AboutScreen />}></Route>
                    <Route path="/login" element={<LoginScreen />}></Route>
                    
                    <Route path="/" element={<HomeScreen/>}></Route>
                </Routes>
            </div>
        </Router>
    )
}
