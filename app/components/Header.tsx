import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-70">
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-white text-lg font-bold drop-shadow-md">
          KJ-NORTH
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Top
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 hover:underline"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-300 hover:underline"
          >
            services
          </Link>
          <Link
            href="/works"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Works
          </Link>
          <Link
            href="/news"
            className="text-white hover:text-gray-300 hover:underline"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Contact
          </Link>
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
}
