import { useState, useEffect } from 'react';
// import sampleUser from '/src/sample-user.json' with { type: 'json' };

// Authentication components
import { SignupView } from '../components/welcome-view/signup-view';

// Components
import { PlaylistView } from '../components/playlist-view/playlist-view';
import { NavigationView } from '../components/navigation-view/navigation-view';

function App() {
    const [user, setUser] = useState(null);

    const [currentPlaylistData, setcurrentPlaylistData] = useState(null);
    const [playlistIframes, setPlaylistIframes] = useState([]);

    useEffect(() => {
        if (user) setcurrentPlaylistData(user.playlists[0]);
    }, [user]);

    // Update the playlist of iframes when the playlist changes
    useEffect(() => {
        if (currentPlaylistData) {
            console.log(currentPlaylistData);
            const htmlList = [];
            currentPlaylistData.entries.map(async (entry) => {
                const data = await getIframeData(entry.url);
                console.log('Entry data:', data);

                const html = await getHtmlByUrl(entry.url);
                htmlList.push(html);
            });
            // console.log('Html Embeds:', htmlList)
            setPlaylistIframes(htmlList);
            // BUG: The list doesn't render until the file is saved.
        }
    }, [currentPlaylistData]);

    const getIframeData = (url) => {
        return fetch(
            `https://iframe.ly/api/iframely?url=${encodeURIComponent(
                url
            )}&key=${import.meta.env.VITE_REACT_APP_KEY}&omit_script=1`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getHtmlByUrl = (url) => {
        return fetch(
            `https://iframe.ly/api/iframely?url=${encodeURIComponent(
                url
            )}&key=${import.meta.env.VITE_REACT_APP_KEY}&omit_script=1`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data.html;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {user ? (
                <>
                    {currentPlaylistData ? (
                        <PlaylistView
                            currentPlaylist={currentPlaylistData}
                            user={user}
                        />
                    ) : null}
                    <NavigationView />
                </>
            ) : (
                <>
                    <SignupView setUser={setUser} />
                </>
            )}
        </>
    );
}

export default App;
