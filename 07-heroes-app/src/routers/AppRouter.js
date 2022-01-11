// router principal
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MarvelScreen } from './../components/marvel/MarvelScreen';
import { DcScreen } from './../components/dc/DcScreen';
import { SearchScreen } from './../components/search/SearchScreen';
import { LoginScreen } from './../components/login/LoginScreen';
import { Navbar } from './../components/ui/Navbar';



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

