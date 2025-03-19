export function Sidebar() {
    return (
        <nav className="col-span-3 h-screen pl-24 font-bold py-12">
            <ul>
                <li>
                    <a href="/docs/introduction"><button className="w-full text-start  px-4 py-2 rounded-lg shadow-md hover:bg-accent  cursor-pointer pl-0">Introduction</button></a>
                </li>
                <li>
                    <a href="/docs/use-filter"><button className="w-full text-start  px-4 py-2 rounded-lg shadow-md hover:bg-accent  cursor-pointer pl-0">useFilters</button></a>
                    <a href="/docs/use-urlState"><button className="w-full text-start  px-4 py-2 rounded-lg shadow-md hover:bg-accent  cursor-pointer pl-0">useURLState</button></a>
                </li>
            </ul>
        </nav>
    )
}