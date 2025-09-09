import React, { useState } from 'react';

// UI
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export const HeaderSection = (props) => {
    const [wrap, setWrap] = useState(true);
    const toggleWrap = () => {
        wrap === true ? setWrap(false) : setWrap(true);
    };

    return (
        <div className="playlist-header">
            <p>{props.user.username}</p>
            <h1>{props.currentPlaylist.title}</h1>
            <div>
                <Typography noWrap={wrap} onClick={toggleWrap}>
                    {props.currentPlaylist.description}
                </Typography>

                <div className="actions">
                    <div>
                        <IconButton aria-label="add">
                            <AddCircleOutlineIcon fontSize="medium" />
                        </IconButton>
                        <IconButton aria-label="share">
                            <IosShareIcon fontSize="medium" />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton aria-label="shuffle">
                            <ShuffleIcon fontSize="medium" />
                        </IconButton>
                        <IconButton aria-label="play">
                            <PlayCircleFilledIcon fontSize="medium" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
