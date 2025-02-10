import React from "react";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="py-16 bg-warmWood text-ivoryWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center">News</h2>
        <ul className="space-y-4">
          <li>
            <span className="block text-sm text-gray-400">2025.01.22</span>
            <span className="block text-lg font-semibold">冬祭りのご案内</span>
          </li>
          <li>
            <span className="block text-sm text-gray-400">2024.12.27</span>
            <span className="block text-lg font-semibold">
              冬季休業のご案内
            </span>
          </li>
        </ul>
        <div className="mt-6 text-center">
          <Link href="/news">
            <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
