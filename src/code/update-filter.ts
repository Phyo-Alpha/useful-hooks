export const updateFilterCode = `import { useCallback } from "react";

const updateFilter = <T>(
    key: string,
    value: T,
    valueProcessor: (value: T) => any = (value) => value
) => {
    const urlParams = new URLSearchParams(window.location.search);
    const processed = valueProcessor(value);

    {/* If the value is falsy, delete the key by default to avoid potential issues with parsing searchParams */ }
    {/* Remove this segment at your own risk */}
    if (!processed) {
        urlParams.delete(key);
    } else {
        urlParams.set(key, processed);
    }

    const newUrl = \`\${window.location.pathname}?\${urlParams.toString()}\`;
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

export default useFilters;`;

export const dropdownUsageExample = `import useFilters from "@/hooks/use-filters";

export default function FilterComponent() {
    const filter = useFilters();

    return (
        <select onChange={(e) => filter("status", e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>
    )
}`;

export const inputUsageExample = `import useFilters from "@/hooks/use-filters";

export default function FilterComponent() {
    const filter = useFilters();
    
    return (
        <input
            onChange={(e) => filter("search", e.target.value)}
            placeholder="Enter a value"
        />
    )
}`;

export const valueProcessorExample = `import useFilters from "@/hooks/use-filters";

export default function FilterComponent() {
    const filter = useFilters();

    function onChange(key: string, value: string) {
        updateFilter(key, value, (val) => {
            switch (key) {
                case "status2":
                    return val === "active" ? "1" : "0";
                case "status3":
                    return val === "all" ? undefined : val; // Can use any falsy value for removing searchkey   
                default:
                    return val;
            }
        });
    }

    return (
        <div>
            <select
                onChange={(e) => { onChange("status2", e.target.value) }}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <select
                onChange={(e) => { onChange("status3", e.target.value) }}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
    ) 
}`;