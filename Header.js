import Link from 'next/link';

const Header = () => (
    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">CROWN TECHNOLOGIES</h1>
            <nav>
                <Link href="/"><a className="px-3">Home</a></Link>
                <Link href="/about"><a className="px-3">About</a></Link>
                <Link href="/services"><a className="px-3">Services</a></Link>
                <Link href="/contact"><a className="px-3">Contact</a></Link>
            </nav>
        </div>
    </header>
);

export default Header;
