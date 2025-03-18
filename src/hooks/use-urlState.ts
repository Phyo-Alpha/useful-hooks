import { useState, useEffect } from "react";

const useURLState = () => {
    const [urlState, setUrlState] = useState({
        searchParams: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
        fullUrl: window.location.href
    });

    useEffect(() => {
        const handleURLChange = () => {
            const newSearchParams = Object.fromEntries(new URLSearchParams(window.location.search).entries());
            const newFullUrl = window.location.href;
            setUrlState({
                searchParams: newSearchParams,
                fullUrl: newFullUrl
            });
        };

        window.addEventListener("popstate", handleURLChange);

        return () => {
            window.removeEventListener("popstate", handleURLChange);
        };
    }, []);

    return urlState;
};

export default useURLState;