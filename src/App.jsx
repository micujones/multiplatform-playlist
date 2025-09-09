import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
// import sampleUser from '/src/sample-user.json' with { type: 'json' };

// Components
import { SignupView } from '../components/welcome-view/signup-view';
import { LoginView } from '../components/welcome-view/login-view';
import { MainView } from '../components/main-view/main-view';

function App() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    // Update locally stored user when updated
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const [currentPlaylistData, setcurrentPlaylistData] = useState(null);
    const [playlistIframes, setPlaylistIframes] = useState([]);

    // useEffect(() => {
    //     if (user) setcurrentPlaylistData(user.playlists[0]);
    // }, [user]);

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
            <Routes>
                <Route
                    index
                    element={
                        user ? (
                            <MainView user={user} setUser={setUser} />
                        ) : (
                            <Navigate to="login" />
                        )
                    }
                />
                <Route
                    path="login"
                    element={
                        user ? (
                            <Navigate to="/" />
                        ) : (
                            <LoginView setUser={setUser} />
                        )
                    }
                />
                <Route
                    path="signup"
                    element={user ? <Navigate to="/" /> : <SignupView />}
                />
            </Routes>
        </>
    );
}

export default App;
