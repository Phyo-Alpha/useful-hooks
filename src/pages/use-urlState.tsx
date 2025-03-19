import { useURLStateCodeBlock, useURLStateCodeUsageExample } from "@/code/use-urlState";
import { CodeBlock } from "@/components/code-block";
import { APIPropsTableProps } from "@/components/props-table";
import useURLState from "@/hooks/use-urlState";

export default function UseURLState() {

    const { fullUrl, searchParams, updateUrl } = useURLState();

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        window.history.pushState({ path: window.location.href }, "", `?searchValue=${e.target.value}`);
        updateUrl();
    }

    const APIparams = [
        {
            name: "fullUrl",
            type: "string",
            default: "-",
            description: "The full URL of the current page, including pathname and searchParams"
        },
        {
            name: "searchParams",
            type: "object",
            default: "-",
            description: "A key-value pair of the search parameters in the URL"
        },
        {
            name: "updateUrl",
            type: "() => void",
            default: "() => void",
            description: "A function to manually update the URL state"
        }
    ]

    return (
        <section>
            <h1 className="border-b pb-4">
                useURLState
            </h1>
            <div className="space-y-8 mt-8">
                <div>
                    <h2>Overview</h2>
                    <p >
                        A hook designed to help you manage the URL state of your application. It provides you with the current URL search parameters and the full URL. It also allows you to update the URL state manually. It uses the event listener "popstate" to listen to URL changes.
                    </p>
                </div>
                <CodeBlock
                    title="Hook Implementation"
                    code={useURLStateCodeBlock}
                />

                <APIPropsTableProps
                    title="Parameters"
                    parameters={APIparams}
                />

                <div className="border" />
                <p>
                    After implementing you just have to call the updateUrl function from the hook to update the URL state.
                </p>

                <CodeBlock
                    title="Usage Example"
                    code={useURLStateCodeUsageExample}
                />
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg ">
                    <h2>Input Demo</h2>
                    <input
                        className="w-full mt-4 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        onChange={handleSearchChange}
                        placeholder="Enter a value"
                    />
                    <p className="flex flex-col">
                        <span>Current Url: {fullUrl}</span>
                        <span>Search: {searchParams['searchValue'] || 'null'}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}