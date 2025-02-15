"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const menuItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Works", path: "/works" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* ✅ ハンバーガーボタン */}
      <button
        ref={buttonRef}
        className="block md:hidden text-white text-2xl p-3  rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* ✅ メニュー */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-black text-center md:hidden shadow-lg rounded-b-md"
        >
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block py-3 text-ivoryWhite hover:bg-warmWood transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                <hr className="border-ivoryWhite/50 w-4/5 mx-auto mb-4" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
