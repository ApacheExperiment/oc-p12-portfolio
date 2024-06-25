import React from 'react'
import Router from './Router/Router'
import { AuthProvider } from './Service/AuthContext'

function App() {
    return (
    <AuthProvider>
        <Router />
    </AuthProvider>
    )
}
export default App
