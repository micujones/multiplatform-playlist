import { useState } from 'react';

// Authentication
import { auth } from '../../server/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { UserForm } from './user-form';
import { Link } from 'react-router';

import './welcome-view.css';

export const LoginView = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Logged in
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <>
            <div className="page-header">
                <h1>Log In</h1>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
            <UserForm
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                submitText="Log in"
            />
        </>
    );
};
