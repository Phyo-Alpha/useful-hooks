type APIPropsTableProps = {
    title: string;
    parameters: {
        name: string;
        type: string;
        default: string;
        description: string;
    }[];
}

export function APIPropsTableProps({
    title,
    parameters
}: APIPropsTableProps) {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
            <table className="w-full mt-4">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                        <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Parameter</th>
                        <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Type</th>
                        <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Default</th>
                        <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {parameters.map((param, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{param.name}</td>
                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{param.type}</td>
                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{param.default}</td>
                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{param.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}