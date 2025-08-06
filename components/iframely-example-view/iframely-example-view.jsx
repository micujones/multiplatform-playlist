import { useEffect, useState } from 'react';

const API_KEY = process.env.API_KEY;

export const IframelyView = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [html, setHtml] = useState({
        __html: '<div />',
    });

    useEffect(() => {
        if (props && props.url) {
            fetch(
                `https://cdn.iframe.ly/api/iframely?url=${encodeURIComponent(
                    props.url
                )}&key=${API_KEY}&iframe=1&omit_script=1`
            )
                .then((response) => response.json())
                .then(
                    (response) => {
                        setIsLoaded(true);
                        if (response.html) {
                            setHtml({ __html: response.html });
                        } else if (response.error) {
                            setError({
                                code: response.error,
                                message: response.message,
                            });
                        }
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        } else {
            setError({
                code: 400,
                message: 'Provide url attribute for the element',
            });
        }
    }, []);

    useEffect(() => {
        window.iframely && window.iframely.load();
    });

    if (error) {
        return (
            <div>
                Error: {error.code} - {error.message}
            </div>
        );
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <div dangerouslySetInnerHTML={html} />;
    }
};
