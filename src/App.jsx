import { useState, useEffect } from 'react';

function App() {
    const [url, setUrl] = useState('');
    const [embedHtml, setEmbedHtml] = useState(null);

    const getHtmlByUrl = (url) => {
        fetch(
            `https://iframe.ly/api/iframely?url=${encodeURIComponent(
                url
            )}&key=${import.meta.env.VITE_REACT_APP_KEY}&omit_script=1`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setEmbedHtml(data.html);
                console.log(data.html);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div>
                <h1>Agora</h1>
                <div>
                    <p>Links to use:</p>
                    <a
                        href="https://www.facebook.com/share/p/1EdyXNkTk5/"
                        target="_blank"
                    >
                        Facebook
                    </a>{' '}
                    <a
                        href="https://www.youtube.com/watch?v=IMnq-oAXBBA"
                        target="_blank"
                    >
                        YouTube
                    </a>{' '}
                    <a
                        href="https://www.tiktok.com/@scout2015/video/6718335390845095173"
                        target="_blank"
                    >
                        TikTok
                    </a>{' '}
                    <a
                        href="https://open.substack.com/pub/geneweingarten/p/courage-and-cowardice?utm_campaign=post&utm_medium=web"
                        target="_blank"
                    >
                        Substack
                    </a>
                </div>
                <br />
                {/* Input link */}
                <label htmlFor="">Url: </label>
                <input type="text" onInput={(e) => setUrl(e.target.value)} />
                <button onClick={() => getHtmlByUrl(url)}>Embed it</button>
                {/* Response */}
                <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
            </div>
        </>
    );
}

export default App;
