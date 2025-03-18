import { useState } from "react";

export type CodeBlockProps = {
    title: string;
    code: string;
}
export function CodeBlock({
    title,
    code
}: CodeBlockProps) {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
            <div className="relative mt-4">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                    <div>{code}</div>
                </pre>
                <button
                    onClick={() => copyToClipboard(code)}
                    className="absolute top-2 right-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    {copied ? "Copied!" : "Copy Code"}
                </button>
            </div>
        </div>
    )
}