"use client";
import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ハンバーガーボタン */}
      <button
        className="block md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {/* メニュー */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-center md:hidden">
          <li>
            <Link
              href="/about"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              Works
            </Link>
          </li>

          <li>
            <Link
              href="/news"
              className="text-white hover:text-gray-300 hover:underline"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
