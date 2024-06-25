import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.scss'
import arrow from "../assets/img/icon/icon-arrow-left.png";
import { useAuth } from '../Service/AuthContext';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/add');
        } catch (error) {
            console.error('La connexion a échoué:', error);
            setErrorMessage("Adresse e-mail ou mot de passe incorrect");
        }
    };

    return (
        <div className="borderLog">
            <form className="formLog"  onSubmit={handleSubmit}>
                <Link to="/">
                    <img 
                        src={arrow} 
                        alt="return icon" 
                        width={20} 
                        height={20} 
                        className="arrow" 
                    />
                </Link>
                <div className="inputWrapper">
                    <label htmlFor="email" className="labelLog">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="inputLog" 
                    />
                    <label htmlFor="password" className="labelLog">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="inputLog" 
                    />
                    <button 
                    type="submit" 
                    value="Envoyer" 
                    className="buttonLog"
                    >
                    Connexion
                    </button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </div>
            </form>
        </div>
    );
}