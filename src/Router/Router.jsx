import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Login from '../Pages/Login';
import Add from '../Pages/Add';
import { useAuth } from '../Services/AuthContext';
import ProtectedRoute from '../Services/ProtectedRoute';


export default function Router() {
    // Récupération de l'état d'authentification depuis le contexte
    const { isAuthenticated } = useAuth();
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />} />
                    <Route
                    path="/add"
                    element={  
                        // Route protégée, ne peut être accédée que si l'utilisateur est authentifié
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