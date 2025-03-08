import React from "react";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="py-16 bg-darkNavy text-ivoryWhite min-h-[500px]">
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
        <div className="mt-6 text-center">
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
