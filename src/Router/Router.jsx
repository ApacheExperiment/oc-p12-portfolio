import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Login from '../Pages/Login';
import Add from '../Pages/Add';
import { useAuth } from '../Service/AuthContext';
import ProtectedRoute from '../Service/ProtectedRoute';


export default function Router() {
    const { isAuthenticated } = useAuth();
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />} />
                    <Route
                    path="/add"
                    element={
                        <ProtectedRoute 
                            element={<Add />} 
                            isAuthenticated={isAuthenticated} 
                        />
                    }
                />
                    <Route path="*" element={<Error />}/>
                </Routes>
        </BrowserRouter>
    );
}