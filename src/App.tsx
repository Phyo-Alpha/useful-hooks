import GithubButton from "./components/github-button"

function App() {
    return (
        <div
            className="bg-background text-foreground min-w-full h-screen px-12 py-4">
            <header>
                <nav>
                    <ul className="flex flex-row justify-between items-center h-12">
                        <li className="flex items-center gap-4">
                            <h3>
                                <a href="/">Useful-hooks.ts</a>
                            </h3>
                            <a href="/docs/introduction" className="text-muted-foreground tracking-wide">Documentation</a>
                        </li>
                        <li>
                            <GithubButton />
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="mt-20">
                <section className="flex flex-col items-center gap-6">
                    <h1 className="text-5xl">Useful-hooks.ts</h1>
                    <p className="text-lg tracking-wide text-center">A collections of use-hooks that I built during my works that I believed will be useful</p>
                    <button className="bg-foreground text-background px-4 py-2 rounded-lg shadow-md w-48 tracking-wider">
                        <a href="/docs/introduction">
                            Explore the docs
                        </a>
                    </button>
                </section>
            </main>
        </div>
    )
}

export default App
