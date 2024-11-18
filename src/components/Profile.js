// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.log('No token found');
                    setMessage('User not authenticated.');
                    return;
                }
    
                const response = await axios.get('http://localhost:5000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data);
                setUsername(response.data.username);
                setEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching profile:', error.response?.data || error.message);
                setMessage('Error fetching profile.');
            }
        };
        fetchProfile();
    }, []);
    

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('User not authenticated.');
                return;
            }
    
            await axios.put(
                'http://localhost:5000/profile',
                { username, email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json', // Ensures the JSON payload is sent correctly
                    },
                }
            );
            setMessage('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage(error.response?.data?.message || 'Error updating profile.');
        }
    };
    
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <div>
                <input
                    type="text"
                    placeholder="New Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="New Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleUpdate}>Update Profile</button>
            </div>
            <p>{message}</p>
        </div>
    );
};

export default Profile;
