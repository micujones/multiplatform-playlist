import { useState } from 'react';

// UI components
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

export const UserForm = ({
    setEmail,
    setPassword,
    setUsername,
    handleSubmit,
    submitText,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // Password UI functions
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="user-form">
            <TextField label="Email" variant="standard" onInput={handleEmail} />
            {submitText === 'Sign up' ? (
                <TextField
                    label="Username"
                    variant="standard"
                    onInput={handleUsername}
                />
            ) : null}
            <TextField
                label="Password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                onInput={handlePassword}
                slotProps={{
                    input: {
                        endAdornment: (
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
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Button variant="contained" onClick={handleSubmit}>
                {submitText}
            </Button>
        </div>
    );
};
