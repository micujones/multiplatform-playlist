import React, { useEffect } from 'react';

export const ProfileView = ({ user, setUser }) => {
    const logout = () => {
        setUser(null);
        localStorage.clear();
    };

    return (
        <>
            <button onClick={logout}>Logout</button>
            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
        </>
    );
};
