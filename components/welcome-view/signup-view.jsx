import { useState } from 'react';

// Authentication
import { auth } from '../../server/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { UserForm } from './user-form';

// UI components
import Snackbar from '@mui/material/Snackbar';
// import Slide from '@mui/material/Slide';
import { Fragment } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Navigation
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

import './welcome-view.css';
import { createUserDoc } from '../../server/db';

export const SignupView = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    let navigate = useNavigate();
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up
                const currentUser = userCredential.user;
                await updateProfile(auth.currentUser, {
                    displayName: `${username}`,
                });
                return currentUser;
            })
            .then(async (user) => {
                console.log(user);
                await createUserDoc(user.displayName, user.email);
            })
            .then(() => {
                handleSnackBar();
                navigate('/login');
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    // Snack bar
    const [open, setOpen] = useState(false);

    const handleSnackBar = () => {
        open === true ? setOpen(false) : setOpen(true);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackBar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <>
            <div className="page-header">
                <h1>Sign Up</h1>
                <p>
                    Have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
            <UserForm
                setEmail={setEmail}
                setPassword={setPassword}
                setUsername={setUsername}
                handleSubmit={handleSubmit}
                submitText="Sign up"
            />

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={4000}
                onClose={handleSnackBar}
                message="Sign up successful!"
                action={action}
            />
        </>
    );
};
