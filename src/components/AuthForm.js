import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

axios.defaults.baseURL = 'https://brimin.onrender.com/'; // Set base URL for all axios requests

function AuthForm() {
    const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Initialize navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isRegister ? '/register' : '/login';
        const data = isRegister ? { username, email, password } : { email, password };

        try {
            const response = await axios.post(endpoint, data);
            if (isRegister) {
                setMessage(response.data.message);
            } else {
                // For login, store the token in localStorage and set success message
                const { access_token } = response.data;
                localStorage.setItem('access_token', access_token);
                setMessage("Login successful!");
            }
            // Redirect to the home page after successful login or registration
            navigate('/'); // Adjust this path based on your routing setup
        } catch (error) {
            setMessage(error.response?.data.message || 'Error occurred');
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-header">{isRegister ? "Register" : "Login"}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                {isRegister && (
                    <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="auth-input"
                    />
                )}
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                />
                <button type="submit" className="auth-submit">
                    {isRegister ? "Register" : "Login"}
                </button>
            </form>
            {message && <p className="auth-message">{message}</p>}
            <button onClick={() => setIsRegister(!isRegister)} className="auth-toggle">
                {isRegister ? "Have an account? Login" : "New user? Register"}
            </button>
        </div>
    );
}

export default AuthForm;