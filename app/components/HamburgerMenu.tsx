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
              href="/"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              トップ
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              会社情報
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              実績
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              サービス
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 text-white hover:text-gray-300 hover:underline"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
