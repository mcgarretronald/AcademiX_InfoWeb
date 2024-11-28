import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black bg-opacity-50 text-white p-4 fixed left-0 right-0 top-0">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo or Brand Name */}
                <div className="text-2xl font-mako">
                    <Link href="/" className="text-white">
                        AcademiX
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <Link href="#home" className="hover:text-[#9ECDF2]">Home</Link>
                    <Link href="#about" className="hover:text-[#9ECDF2]">About Us</Link>
                    <Link href="#services" className="hover:text-[#9ECDF2]">Services</Link>
                    <Link href="#contact" className="hover:text-[#9ECDF2]">Contact</Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        id="menu-toggle"
                        className="text-white focus:outline-none"
                        onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="md:hidden hidden bg-black bg-opacity-50 z-10 text-white py-4">
                <Link href="#home" className="block text-center py-2 hover:text-[#9ECDF2]">Home</Link>
                <Link href="#about" className="block text-center py-2 hover:text-[#9ECDF2]">About Us</Link>
                <Link href="#services" className="block text-center py-2 hover:text-[#9ECDF2]">Services</Link>
                <Link href="#contact" className="block text-center py-2 hover:text-[#9ECDF2]">Contact</Link>
            </div>
        </nav>
    );
}
