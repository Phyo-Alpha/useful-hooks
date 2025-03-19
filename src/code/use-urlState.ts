export const useURLStateCodeBlock = `import { useState, useEffect } from "react";

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

    const updateUrl = () => {
        window.dispatchEvent(new Event("popstate"));
    }

    return { ...urlState, updateUrl };
};

export default useURLState;`

export const useURLStateCodeUsageExample = `import useURLState from "@/hooks/use-urlState";

const { fullUrl, searchParams, updateUrl } = useURLState();

function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    window.history.pushState({ path: window.location.href }, "", \`?search=\${e.target.value}\`);
    updateUrl();
}

return (
    <div>
        <input
            type="text"
            value={searchParams.search}
            onChange={handleSearchChange}
        />
        <p>Full URL: {fullUrl}</p>
        <p>Search: searchParams['search']</p>
    </div>
)`;