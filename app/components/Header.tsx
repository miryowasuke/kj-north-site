import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        <Link href="/" className="text-white text-lg font-bold">
          KJ-NORTH
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="/works" className="text-white hover:text-gray-300">
            Works
          </Link>
          <Link href="/news" className="text-white hover:text-gray-300">
            News
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
