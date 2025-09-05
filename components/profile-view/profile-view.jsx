import React from 'react';

export const ProfileView = ({ user, setUser }) => {
    const logout = () => {
        setUser(null);
        localStorage.clear();
    };

    return (
        <>
            <button onClick={logout}>Logout</button>
            <h1>Username</h1>
            <p>{user.email}</p>
        </>
    );
};
