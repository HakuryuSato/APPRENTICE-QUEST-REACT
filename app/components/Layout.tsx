import Link from "next/link";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="font-sans antialiased text-gray-800">
            <header className="bg-gray-800 text-white py-4">
                <nav className="text-center">
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/#about" className="mx-2 hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/#work" className="mx-2 hover:text-gray-300">
                        Work
                    </Link>
                    <Link href="/#contact" className="mx-2 hover:text-gray-300">
                        Contact
                    </Link>
                    <Link href="/blog" className="mx-2 hover:text-gray-300">
                        Blog
                    </Link>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>© 2024 My Portfolio</p>
            </footer>
        </div>
    );
}
