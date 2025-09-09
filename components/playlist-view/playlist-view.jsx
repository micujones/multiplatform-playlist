import React, { useEffect, useState } from 'react';
import { HeaderSection } from './header-section';
import { ListView } from './list-view';

import './playlist-view.css';

export const PlaylistView = (props) => {
    return (
        <>
            <HeaderSection
                currentPlaylist={props.currentPlaylist}
                user={props.user}
            />
            <ListView entries={props.currentPlaylist.entries} />
        </>
    );
};
