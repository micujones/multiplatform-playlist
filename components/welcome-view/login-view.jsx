import { useState } from 'react';

// Authentication
import { auth } from '../../server/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { UserForm } from './user-form';

import './welcome-view.css';

export const LoginView = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user);
                console.log(userCredential.user);
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
                    Don't have an account? <a href="">Sign up</a>
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
