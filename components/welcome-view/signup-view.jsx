import { useEffect, useState } from 'react';

// Authentication
import { auth } from '../../server/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// UI components
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { Fragment } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const SignupView = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                showSnackBar();
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    // Password UI functions
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    // Snack bar
    const [open, setOpen] = useState(false);

    const showSnackBar = () => {
        setOpen(true);
    };

    const closeSnackBar = () => {
        setOpen(false);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeSnackBar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <>
            <h1>Sign Up</h1>
            <p>
                Already a user? <a href="">Log In</a>
            </p>

            <TextField label="Email" variant="standard" onInput={handleEmail} />
            <InputLabel htmlFor="standard-adornment-password">
                Password
            </InputLabel>
            <Input
                type={showPassword ? 'text' : 'password'}
                onInput={handlePassword}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword
                                    ? 'hide the password'
                                    : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Button variant="contained" onClick={handleSignup}>
                Submit
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={4000}
                onClose={closeSnackBar}
                message="Sign up successful!"
                action={action}
            />
        </>
    );
};
