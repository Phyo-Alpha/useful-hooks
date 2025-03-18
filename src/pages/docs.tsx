import GithubButton from "@/components/github-button";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import { Outlet } from "react-router";

export function Docs() {
    return (
        <main className="h-screen flex flex-col">
            <nav className="flex flex-row justify-between items-center h-12 border-b p-8">
                <ul className="flex items-center justify-between w-full">
                    <li>
                        <h3>
                            <a href="/">Useful-hooks.ts</a>
                        </h3>
                    </li>
                    <li>
                        <GithubButton />
                    </li>
                </ul>
            </nav>
            <section className="grid grid-cols-12 flex-1 overflow-hidden">
                <Sidebar />
                <section className="py-8 mb-12 col-span-9 border-l pl-6 overflow-y-auto">
                    <Outlet />
                </section>
            </section>
        </main>
    )
}