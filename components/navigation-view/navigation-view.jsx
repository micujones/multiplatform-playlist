import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// Icons
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const NavigationView = () => {
    const [value, setValue] = useState('profile');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
            elevation={3}
        >
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Library"
                    value="library"
                    icon={<LibraryBooksIcon />}
                />
                <BottomNavigationAction
                    label="Profile"
                    value="profile"
                    icon={<AccountCircleIcon />}
                />
            </BottomNavigation>
        </Paper>
    );
};
