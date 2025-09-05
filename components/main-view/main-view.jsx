import React from 'react';

import { ProfileView } from '../profile-view/profile-view';
import { NavigationView } from '../navigation-view/navigation-view';

export const MainView = ({ user, setUser }) => {
    return (
        <>
            <ProfileView user={user} setUser={setUser} />
            <NavigationView />
        </>
    );
};
