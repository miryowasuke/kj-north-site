import React from "react";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center underline">News</h2>
        <ul className="space-y-4">
          <li className="flex justify-start border-b pb-2">
            <span className="text-white pr-2">2025.01.22</span>
            <span>冬祭りのご案内</span>
          </li>
          <li className="flex justify-start border-b pb-2">
            <span className="text-white pr-2">2024.12.27</span>
            <span>冬季休業のご案内</span>
          </li>
          <li className="flex justify-start border-b pb-2">
            <span className="text-white pr-2">2025.01.22</span>
            <span>冬祭りのご案内</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/news">
            <button className="bg-warmWood text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
