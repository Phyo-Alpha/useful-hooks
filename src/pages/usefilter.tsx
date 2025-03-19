import { inputUsageExample, updateFilterCode, dropdownUsageExample, valueProcessorExample } from "@/code/update-filter";
import { CodeBlock } from "@/components/code-block";
import { APIPropsTableProps } from "@/components/props-table";
import useFilters from "@/hooks/use-filters";
import useURLState from "@/hooks/use-urlState";

export default function UseFiltersPage() {
    const updateFilter = useFilters();

    const { fullUrl, searchParams, updateUrl } = useURLState();

    const APIparams = [
        {
            name: "key",
            type: "string",
            default: "-",
            description: "The key to update in the URL parameters"
        },
        {
            name: "value",
            type: "T",
            default: "-",
            description: "The value to set for the key"
        },
        {
            name: "valueProcessor",
            type: "(value: T) => any",
            default: "(value) => value",
            description: "A function to process the value before setting it in the URL parameters"
        }
    ]

    function onChange(key: string, value: string) {
        updateFilter(key, value, (val) => {
            switch (key) {
                case "status2":
                    return val === "active" ? "1" : "0";
                case "status3":
                    return val === "all" ? undefined : val; // Can pass undefined/null as well
                default:
                    return val;
            }
        });
    }

    function handleUpdateFilter(e: React.ChangeEvent<HTMLSelectElement>) {
        onChange("status", e.target.value);
        updateUrl();
    }

    function handleUpdateInputFilter(e: React.ChangeEvent<HTMLInputElement>) {
        onChange("search", e.target.value);
        updateUrl();
    }

    return (
        <section>
            <h1 className="border-b pb-4">
                useFilters
            </h1>

            <div className="space-y-8 mt-8">
                <div >
                    <h2>Overview</h2>
                    <p >
                        A custom hook for managing filter states in URL parameters.
                    </p>
                </div>

                <CodeBlock
                    title="Hook Implementation"
                    code={updateFilterCode}
                />

                <APIPropsTableProps
                    title="Parameters"
                    parameters={APIparams}
                />

                <CodeBlock
                    title="Usage Example"
                    code={dropdownUsageExample}
                />

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg ">
                    <h2>Dropdown Demo</h2>
                    <select
                        className="w-full mt-4 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        onChange={handleUpdateFilter}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <p className="flex flex-col">
                        <span>Current Url: {fullUrl}</span>
                        <span>Status: {searchParams['status'] || 'null'}</span>
                    </p>
                </div>

                <CodeBlock
                    title="Input Usage Example"
                    code={inputUsageExample}
                />

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg ">
                    <h2>Input Demo</h2>
                    <input
                        className="w-full mt-4 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        onChange={handleUpdateInputFilter}
                        placeholder="Enter a value"
                    />
                    <p className="flex flex-col">
                        <span>Current Url: {fullUrl}</span>
                        <span>Search: {searchParams['search'] || 'null'}</span>
                    </p>
                </div>

                <div>
                    <h2>Value Processor</h2>
                    <p>Sometimes you might want to transformed the value into some value before pushing to the url. The hook provide an optional params to pass the value transformer of your choice.</p>
                    <p><b className="text-lg">Important Note</b>: The hook auto delete the search key if the searchValue is falsy, so you can transform the value into any falsy value to remove the searchKey from URL.</p>
                </div>

                <CodeBlock
                    title="Value Processor Usage"
                    code={valueProcessorExample}
                />

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-4 divide-y">
                    <h2>Value Processor Demo</h2>
                    <div className="pb-4">
                        <h3>Example 1</h3>
                        <p>Here in this example I am transforming the active/inactive to 1 & 0 representation</p>
                        <select
                            className="w-full mt-4 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            onChange={(e) => { onChange("status2", e.target.value); updateUrl() }}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <p className="flex flex-col">
                            <span>Current Url: {fullUrl}</span>
                            <span>Status2: {searchParams['status2'] || 'null'}</span>
                        </p>
                    </div>
                    <div>
                        <h3>Example 2</h3>
                        <p>Here, I am passing transforming all to falsy value, thus the search key was deleted in the process</p>
                        <select
                            className="w-full mt-4 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            onChange={(e) => { onChange("status3", e.target.value); updateUrl() }}>
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <p className="flex flex-col">
                            <span>Current Url: {fullUrl}</span>
                            <span>Status3: {searchParams['status3'] || 'null'}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}