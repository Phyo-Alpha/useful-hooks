import { useCallback } from "react";

const updateFilter = <T>(
    key: string,
    value: T,
    valueProcessor: (value: T) => any = (value) => value
) => {
    const urlParams = new URLSearchParams(window.location.search);
    const processed = valueProcessor(value);

    {/* If the value is falsy, delete the key to avoid issues with passing searchParams */ }
    if (!processed) {
        urlParams.delete(key);
    } else {
        urlParams.set(key, processed);
    }

    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
}

const useFilters = () => {
    return useCallback(
        <T>(key: string, value: T, valueProcessor: (value: T) => any = (value) => value) => {
            updateFilter(key, value, valueProcessor);
        }
        , []
    )
}

export default useFilters;